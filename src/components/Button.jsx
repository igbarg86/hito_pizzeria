const Button = () => {
  return (
    <div className='d-flex justify-content-between'>

      <button className='btn btn-light border border-dark m-2'>
        <i className='fas fa-eye' /> Ver más
      </button>

      <button className='btn btn-dark m-2'>
        <i className='fas fa-cart-plus' /> Añadir
      </button>
    </div>
  )
}

export default Button
