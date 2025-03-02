import { Link } from 'react-router-dom'
import NotFoundImage from '../assets/img/bluerror.png'

const NotFound = () => {
  return (
    <main className='d-flex justify-content-center align-items-center vh-100 text-center'>
      <div className='container'>
        <img src={NotFoundImage} alt='404 Not Found' className='img-fluid mb-4' style={{ maxWidth: '400px' }} />
        <h2 className='display-4 text-danger mb-3'>Oops! Página no encontrada.</h2>
        <p className='lead text-muted mb-4'>Parece que la página que buscas no existe.</p>
        <Link to='/' className='btn btn-primary btn-lg'>Volver al Inicio</Link>
      </div>
    </main>
  )
}

export default NotFound
