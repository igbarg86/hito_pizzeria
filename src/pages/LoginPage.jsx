import { useState, useContext } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import './LoginPage.css'

const LoginPage = () => {
  const [users, setUsers] = useState({
    email: '',
    password: ''
  })

  const { login, token } = useContext(UserContext)
  const navigate = useNavigate()

  if (token) {
    navigate('/')
  }

  const handleChangeLogin = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()

    const { email, password } = users
    if (!email.trim() || !password.trim()) {
      toast.error('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      toast.warning('Tu contraseña debe tener como mínimo 6 caracteres')
      return
    }

    const loginSuccessful = await login({ email, password })

    if (loginSuccessful) {
      toast.success('Has iniciado sesión correctamente')
      navigate('/')
      setUsers({ email: '', password: '' })
    } else {
      toast.error('Credenciales incorrectas')
    }
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
        <div className='card-body'>
          <h2 className='card-title text-center mb-4'>Login</h2>
          <Toaster position='top-center' richColors expand className='toast-center' />
          <form onSubmit={handleSubmitLogin}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type='email'
                name='email'
                value={users.email}
                onChange={handleChangeLogin}
                className='form-control'
                placeholder='Ingresa tu correo electrónico'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Contraseña</label>
              <input
                type='password'
                name='password'
                value={users.password}
                onChange={handleChangeLogin}
                className='form-control'
                placeholder='Ingresa tu contraseña'
              />
            </div>

            <button type='submit' className='btn btn-primary mt-3 w-100'>
              Inicio de sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
