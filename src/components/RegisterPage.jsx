import { useState } from 'react'
import { Toaster, toast } from 'sonner'

const RegisterPage = () => {
  const [users, setUsers] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    formType: 'register'

  })

  const handleChangeRegister = async (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault()

    const { email, password, confirmPassword } = users
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.error('Todos los campos son obligatorios')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden entre sí')
      return
    }
    if (password.length < 6) {
      toast.warning('Tu contraseña debe tener como mínimo 6 caracteres')
      return
    }

    toast.success('¡Registro exitoso!')
    setUsers({ email: '', password: '', confirmPassword: '' })
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
        <div className='card-body'>
          <h2 className='card-title text-center mb-4'>Registrate</h2>
          <Toaster position='top-center' richColors expand />
          <form onSubmit={handleSubmitRegister}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type='email'
                name='email'
                value={users.email}
                onChange={handleChangeRegister}
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
                onChange={handleChangeRegister}
                className='form-control'
                placeholder='Ingresa tu contraseña'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='confirmPassword' className='form-label'>Confirmar Contraseña</label>
              <input
                type='Password'
                name='confirmPassword'
                value={users.confirmPassword}
                onChange={handleChangeRegister}
                className='form-control'
                placeholder='Confirmar tu contraseña'
              />
            </div>
            <button type='submit' className='btn btn-primary  mt-3 w-100' disabled=''>
              Registrate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
