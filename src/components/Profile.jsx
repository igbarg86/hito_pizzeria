import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { token, logout } = useContext(UserContext)
  const navigate = useNavigate()

  if (!token) {
    navigate('/login')
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
        <div className='card-body'>
          <h2 className='card-title text-center mb-4' style={{ borderBottom: '2px solid white', paddingBottom: '10px' }}>
            Perfil de Usuario
          </h2>
          <p className='card-text'><strong>Email:</strong>tester@gmail.com</p>
          <button className='btn btn-primary mx-auto d-block' onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
