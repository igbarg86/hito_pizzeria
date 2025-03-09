const Profile = () => {
  const email = 'Usuario@ejemplo.com'
  const handleLogout = () => {
    console.log('Cerrar sesión')
  }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='card mx-auto shadow-sm bg-dark text-light' style={{ width: '100%', maxWidth: '400px' }}>
        <div className='card-body'>
          <h2 className='card-title text-center mb-4' style={{ borderBottom: '2px solid white', paddingBottom: '10px' }}>
            Perfil de Usuario
          </h2>
          <p className='card-text'><strong>Email:</strong> {email}</p>
          <button className='btn btn-primary mx-auto d-block' onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
