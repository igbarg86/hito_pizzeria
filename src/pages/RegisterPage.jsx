import { useContext } from 'react'
import { Toaster, toast } from 'sonner'
import { UserContext } from '../context/UserContext'
import UserInput from '../hooks/UserInput'
import './RegisterPage.css'

const RegisterPage = () => {
  const email = UserInput('')
  const password = UserInput('')
  const confirmPassword = UserInput('')

  const { register } = useContext(UserContext)

  const handleSubmitRegister = async (e) => {
    e.preventDefault()

    const { value: emailValue } = email
    const { value: passwordValue } = password
    const { value: confirmPasswordValue } = confirmPassword

    if (!emailValue.trim() || !passwordValue.trim() || !confirmPasswordValue.trim()) {
      toast.error('Todos los campos son obligatorios')
      return
    }

    if (passwordValue !== confirmPasswordValue) {
      toast.error('Las contraseñas no coinciden entre sí')
      return
    }

    if (passwordValue.length < 6) {
      toast.warning('Tu contraseña debe tener como mínimo 6 caracteres')
      return
    }

    const registerSuccessful = await register({ email: emailValue, password: passwordValue })

    if (registerSuccessful) {
      toast.success('¡Registro exitoso!')
      email.onChange({ target: { value: '' } })
      password.onChange({ target: { value: '' } })
      confirmPassword.onChange({ target: { value: '' } })
    } else {
      toast.error('Error en el registro')
    }
  }

  const handleEmailChange = (e) => {
    email.onChange(e)
  }

  const handlePasswordChange = (e) => {
    password.onChange(e)
  }

  const handleConfirmPasswordChange = (e) => {
    confirmPassword.onChange(e)
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
        <div className='card-body'>
          <h2 className='card-title text-center mb-4'>Registrate</h2>
          <Toaster position='top-center' richColors expand className='toast-center' />
          <form onSubmit={handleSubmitRegister}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type='email'
                name='email'
                value={email.value}
                onChange={handleEmailChange}
                className='form-control'
                placeholder='Ingresa tu correo electrónico'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Contraseña</label>
              <input
                type='password'
                name='password'
                value={password.value}
                onChange={handlePasswordChange}
                className='form-control'
                placeholder='Ingresa tu contraseña'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='confirmPassword' className='form-label'>Confirmar Contraseña</label>
              <input
                type='password'
                name='confirmPassword'
                value={confirmPassword.value}
                onChange={handleConfirmPasswordChange}
                className='form-control'
                placeholder='Confirmar tu contraseña'
              />
            </div>

            <button type='submit' className='btn btn-primary mt-3 w-100'>
              Registrate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
