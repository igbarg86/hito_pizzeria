import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../context/CartContext'
import './Navbar.css'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
  const { calcularTotal } = useContext(cartContext)
  const total = calcularTotal()

  const { token, logout } = useContext(UserContext)
  const navigate = useNavigate()

  // FUNCION PARA MANEJAR CIERRE DE SESION

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    navigate('/')
  }

  const validateRoot = ({ isActive }) => isActive ? 'menu active' : 'menu'

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
              <NavLink to='/' className={({ isActive }) => `${validateRoot({ isActive })} btn border border-opacity-50`}>
                <i className='fa fa-pizza-slice' /> Home
              </NavLink>
            </li>

            {token
              ? (
                <>

                  <li className='nav-item me-3'>
                    <NavLink to='/profile' className={({ isActive }) => `${validateRoot({ isActive })} btn  border border-opacity-50`}>
                      <i className='fa fa-user' /> Profile
                    </NavLink>
                  </li>

                  <li className='nav-item me-3'>
                    <NavLink to='/logout' className={({ isActive }) => `${validateRoot({ isActive })} btn  border border-opacity-50`} onClick={handleLogout}>
                      <i className='fa fa-sign-out-alt' /> Logout
                    </NavLink>
                  </li>
                </>
                )
              : (
                <>

                  <li className='nav-item me-3'>
                    <NavLink to='/login' className='btn btn-link nav-link  border border-white'>
                      <i className='fa fa-unlock' /> Login
                    </NavLink>
                  </li>
                  <li className='nav-item me-3'>
                    <NavLink to='/register' className='btn btn-link nav-link  border border-white'>
                      <i className='fa fa-lock' /> Register
                    </NavLink>
                  </li>
                </>
                )}

            <li className='nav-item me-3'>
              <NavLink to='/cart' className={({ isActive }) => `${validateRoot({ isActive })} btn border border-primary`}>
                <i className='fa fa-shopping-cart' /> Total: ${total.toLocaleString()}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
