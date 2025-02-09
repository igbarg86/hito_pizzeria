import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './Button'
import './CardPizza.css'

const CardPizza = ({ img, name, titulo, ingredients, price }) => {
  return (
    <div className='card' style={{ width: '22rem', minHeight: '400px' }}>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body d-flex flex-column'>
        <h5 className='card-title border-bottom pb-2 text-center'>{name}</h5>
        <h6 className='card-subtitle mb-2 text-muted text-center'>{titulo}</h6>
        <p className='card-text text-center flex-grow-1'>{ingredients}</p>
        <h4 className='card-text border-top pt-2 mt-3 text-center '>{price}</h4>
        <div className='mt-4'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default CardPizza
