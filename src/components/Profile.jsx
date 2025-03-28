import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { token, email: contextEmail, logout, user, fetchUserProfile } = useContext(UserContext)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      fetchUserProfile()
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [token, fetchUserProfile])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!token) {
    return (
      <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
        <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
          <div className='card-body'>
            <p className='card-text text-center'>Por favor, inicia sesión para ver tu perfil.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
        <div className='card-body'>
          <h2 className='card-title text-center mb-4' style={{ borderBottom: '2px solid white', paddingBottom: '10px' }}>
            Perfil de Usuario
          </h2>
          {loading
            ? (
              <p className='text-center'>Cargando...</p>
              )
            : (
              <>
                <p className='card-text'>
                  <strong>Email:</strong> {user?.email || contextEmail}
                </p>
                <p className='card-text'>
                  <strong>ID:</strong> {user?.id}
                </p>
                <button className='btn btn-primary mx-auto d-block' onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </>
              )}
        </div>
      </div>
    </div>
  )
}

export default Profile
