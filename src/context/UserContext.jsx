import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const login = (credentials) => {
    if (credentials.email === 'tester@gmail.com' && credentials.password === '123456') {
      setToken(true)
      return true
    }
    return false
  }

  // FUNCION CERRAR SESION

  const logout = () => {
    setToken(false)
  }

  // POVEER EL ESTADO Y LAS FUNCIONES PARA MANIPULARLAS DONDE QUERAMOS

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
