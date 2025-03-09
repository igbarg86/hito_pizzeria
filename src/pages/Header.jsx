import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  if (location.pathname !== '/') {
    return null
  }

  return (
    <div className='header d-flex flex-column justify-content-center text-center text-white'>
      <h1>¡Pizzería Mamma Mía!</h1>
      <h6>Tenemos las mejores pizzas que podrás encontrar</h6>
      <hr className='w-75 mx-auto' />
    </div>
  )
}

export default Header
