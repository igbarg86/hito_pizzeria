import { Link } from 'react-router-dom'

const Navbar = () => {
  const total = 25000 // Total de la compra
  const token = true // true esta logueado y false no está logueado

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        {/* Logo de la Pizzería */}
        <Link to='/' className='navbar-brand text-white'>Pizzería Mamma Mía!</Link>

        {/* Botón para la visualización en móviles */}
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        {/* Menú de navegación */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>

            {/* Botón de Home */}
            <li className='nav-item me-3'>
              <Link to='/' className='btn btn-link nav-link text-white border border-white'>
                <i className='fa fa-pizza-slice' /> Home
              </Link>
            </li>
            {/* Botones de Profile, Logout, Login y Register con un solo operador ternario */}
            {token ? (
              <>
                {/* Profile solo si está logueado */}
                <li className='nav-item me-3'>
                  <Link to='/profile' className='btn btn-link nav-link text-white border border-white'>
                    <i className='fa fa-user' /> Profile
                  </Link>
                </li>

                {/* Logout solo si está logueado */}
                <li className='nav-item me-3'>
                  <Link to='/logout' className='btn btn-link nav-link text-white border border-white'>
                    <i className='fa fa-sign-out-alt' /> Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* Login y Register solo si no está logueado */}
                <li className='nav-item me-3'>
                  <Link to='/login' className='btn btn-link nav-link text-white border border-white'>
                    <i className='fa fa-unlock' /> Login
                  </Link>
                </li>
                <li className='nav-item me-3'>
                  <Link to='/register' className='btn btn-link nav-link text-white border border-white'>
                    <i className='fa fa-lock' /> Register
                  </Link>
                </li>
              </>
            )}
            {/* Botón que muestra el total de la compra */}
            <li className='nav-item me-3'>
              <Link to='/cart' className='btn btn-link nav-link text-white border border-primary'>
                <i className='fa fa-shopping-cart' /> Total: ${total.toLocaleString()}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
