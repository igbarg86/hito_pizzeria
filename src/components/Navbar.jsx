import { Link } from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../context/CartContext'

const Navbar = () => {
  const { calcularTotal } = useContext(cartContext)
  const total = calcularTotal()

  const token = true // true esta logueado y false no está logueado

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand text-white d-flex align-items-center'><img src='./src/assets/img/favicon.png' alt='Logo' style={{ width: '30px', height: '30px', marginRight: '10px' }} />Pizzería Mamma Mía!</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item me-3'>
              <Link to='/' className='btn btn-link nav-link text-white border border-white'>
                <i className='fa fa-pizza-slice' /> Home
              </Link>
            </li>

            {token
              ? (
                <>

                  <li className='nav-item me-3'>
                    <Link to='/profile' className='btn btn-link nav-link text-white border border-white'>
                      <i className='fa fa-user' /> Profile
                    </Link>
                  </li>

                  <li className='nav-item me-3'>
                    <Link to='/logout' className='btn btn-link nav-link text-white border border-white'>
                      <i className='fa fa-sign-out-alt' /> Logout
                    </Link>
                  </li>
                </>
                )
              : (
                <>

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
