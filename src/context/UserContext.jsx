import { createContext, useState, useContext } from 'react'
import axios from 'axios'
import cartContext from '../context/CartContext'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const { clearCart } = useContext(cartContext)

  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)
  const [user, setUser] = useState(null)

  const login = async (credentials) => {
    try {
      const { email, password } = credentials
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password })
      const { token, email: userEmail } = response.data

      setToken(token)
      setEmail(userEmail)
      localStorage.setItem('token', token)

      return true
    } catch (error) {
      console.error('Error al hacer login', error)
      return false
    }
  }

  const register = async (credentials) => {
    try {
      const { email, password } = credentials
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password })
      const { token, email: userEmail } = response.data

      setToken(token)
      setEmail(userEmail)
      localStorage.setItem('token', token)

      return true
    } catch (error) {
      console.error('Error al hacer registro', error)
      return false
    }
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
    setUser(null)
    localStorage.removeItem('token')
    clearCart()
  }

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(res.data)
      } catch (error) {
        console.error('Error al obtener el perfil del usuario', error)
      }
    }
  }

  return (
    <UserContext.Provider value={{ token, email, user, login, register, logout, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
