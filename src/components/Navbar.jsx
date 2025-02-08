const Navbar = () => {
  const total = 25000;  // Total de la compra
  const token = false;  // false no está logueado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container-fluid">
        {/* Logo de la Pizzería */}
        <a className="navbar-brand text-white" href="#">Pizzería Mamma Mía!</a>

        {/* Botón para la visualización en móviles */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
        
            {/* Botón de Home */}
            <li className="nav-item me-3">
              <button className="btn btn-link nav-link text-white border border-white">
                <i className="fa fa-pizza-slice"></i> Home
              </button>
            </li>

            {/* Botones de Profile, Logout, Login y Register con un solo operador ternario */}
            {token ? (
              <>
                {/* Profile solo si está logueado */}
                <li className="nav-item me-3">
                  <button className="btn btn-link nav-link text-white border border-white">
                    <i className="fa fa-user"></i> Profile
                  </button>
                </li>

                {/* Logout solo si está logueado */}
                <li className="nav-item me-3">
                  <button className="btn btn-link nav-link text-white border border-white">
                    <i className="fa fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Login y Register solo si no está logueado */}
                <li className="nav-item me-3">
                  <button className="btn btn-link nav-link text-white border border-white">
                    <i className="fa fa-lock"></i> Login
                  </button>
                </li>
                <li className="nav-item me-3">
                  <button className="btn btn-link nav-link text-white border border-white">
                    <i className="fa fa-lock"></i> Register
                  </button>
                </li>
              </>
            )}
            
            {/* Botón que muestra el total de la compra */}
            <li className="nav-item me-3">
              <button className="btn btn-link nav-link text-white border border-primary">
                <i className="fa fa-shopping-cart"></i> Total: ${total.toLocaleString()}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
