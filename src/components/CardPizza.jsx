const CardPizza = ({ pizza }) => {
  const { name, img, price, ingredients, desc } = pizza

  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <div className='card h-100  shadow-lg border-0 rounded-3' style={{ width: 'auto' }}>
      <img src={img} className='card-img-top rounded-3' alt={name} style={{ height: '400px', objectFit: 'cover' }} />
      <div className='card-body d-flex flex-column p-4'>
        <h2 className='card-title text-capitalize border-bottom pb-3 text-center mb-4'>{name}</h2>
        <h6 className='card-subtitle mb-3 text-muted'>Ingredientes</h6>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className='mb-1 text-capitalize'>{ingredient}</li>
          ))}
        </ul>
        <p className='card-text text-justify mb-3 text-muted '>{desc} </p>
        <div className='d-flex justify-content-between align-items-center mt-auto border-top pt-3 border-bottom pb-3 '>
          <h5 className='card-text'>{formattedPrice}</h5>
          <button className='btn btn-primary'> Añadir al carro</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
