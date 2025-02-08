// import "./CardPizza.css"

import Button from './Button'

const CardPizza = ({ img, name, titulo, ingredients, price }) => {
  return (
    <div className='card' style={{ width: '22rem' }}>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title border-bottom pb-2'>{name}</h5>
        <h6 className='card-subtitle mb-2 text-muted text-center'>{titulo}</h6>
        <p className='card-text text-center'>{ingredients}</p>
        <h4 className='card-text border-top pt-2 mt-3 text-center '>{price}</h4>
        <Button />
      </div>
    </div>
  )
}

export default CardPizza
