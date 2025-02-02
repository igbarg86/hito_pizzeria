

const Navbar = () => {
  const total = 25000;  // Total de la compra
  const token = false;  // true para mostrar el botón Logout

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Pizzería Mamma Mía!
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
        
            <li className="nav-item me-3"> 
              <button className="btn btn-link nav-link text-white border border-white" href="#"> 
                <i className="fa fa-pizza-slice"></i> Home
              </button>
            </li>
           
            <li className="nav-item me-3"> 
              <button className="btn btn-link nav-link text-white border border-white" href="#">
                <i className="fa fa-user"></i> Profile
              </button>
            </li>
            {/* Logout (solo si el usuario está logueado) */}
            {token ? (
              <li className="nav-item me-3">
                <button className="btn btn-link nav-link text-white border border-white" href="#">
                  <i className="fa fa-sign-out-alt"></i> Logout
                </button>
              </li>
            ) : (
              <>
                {/* Login (si el usuario no está logueado) */}
                <li className="nav-item me-3"> 
                  <button className="btn btn-link nav-link text-white border border-white" href="#"> 
                    <i className="fa fa-lock"></i> Login
                  </button>
                </li>
                {/* Register (si el usuario no está logueado) */}
                <li className="nav-item me-3"> 
                  <button className="btn btn-link nav-link text-white border border-white" href="#"> 
                    <i className="fa fa-lock"></i> Register
                  </button>
                </li>
              </>
            )}
            
            <li className="nav-item me-3"> 
              <button className="btn btn-link nav-link text-white border border-primary" href="#">
                <i className="fa fa-shopping-cart"></i> Total: ${total}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
