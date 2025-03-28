import { Link } from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../context/CartContext'

const CardPizza = ({ id, name, img, price, ingredients, desc }) => {
  const { agregarAlCarrito } = useContext(cartContext)

  const handleAddToCart = () => {
    agregarAlCarrito({ id, name, img, price, ingredients, desc })
  }

  const formattedPrice = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

  return (
    <div className='shadow-lg border-0 rounded-3'>
      <img src={img} className='card-img-top p-3' alt={name} style={{ height: '400px', objectFit: 'cover', borderRadius: '2rem' }} />
      <div className='card-body d-flex flex-column p-3'>
        <h2 className='card-title text-capitalize border-bottom pb-3 text-center mb-4 '>{name}</h2>
        <h6 className='card-subtitle mb-3 text-muted'>Ingredientes</h6>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className='mb-1 text-capitalize'>{ingredient}</li>
          ))}
        </ul>
        <p className='card-text text-justify mb-3 text-muted'>{desc} </p>
        <div className='d-flex justify-content-between align-items-center mt-auto border-top pt-3 border-bottom pb-3 '>
          <h5 className='card-text'>{formattedPrice}</h5>
          <div>
            <Link to={`/pizza/${id}`} className='btn btn-primary me-2'>Ver Más</Link>
            <button className='btn btn-primary' onClick={handleAddToCart}>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
