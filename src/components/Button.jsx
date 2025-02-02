const Button = () => {
  return (
    <div className="d-flex justify-content-between">
 
      <button className="btn btn-light border border-dark m-2">
        <i className="fas fa-eye"></i> Ver más
      </button>
      
      <button className="btn btn-dark m-2">
        <i className="fas fa-cart-plus"></i> Añadir
      </button>
    </div>
  );
}

export default Button;
