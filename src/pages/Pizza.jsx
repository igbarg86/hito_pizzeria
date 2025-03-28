import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import cartContext from '../context/CartContext'
import './Pizza.css'

const Pizza = () => {
  const { id } = useParams()
  const [productos, setProductos] = useState([])

  const { agregarAlCarrito } = useContext(cartContext)

  const URL = `http://localhost:5000/api/pizzas/${id}`

  const getApi = async () => {
    try {
      const res = await fetch(URL)
      const data = await res.json()
      setProductos([data])
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getApi()
  }, [id])

  console.log(productos)

  return (

    <div className='pizza-container'>
      <div className='pizza-card'>
        {productos.map((producto) => (
          <div key={producto.id} className='pizza-card-inner'>
            <div className='pizza-img-container'>
              <img
                src={producto.img}
                alt={producto.name}
                className='pizza-img'
              />
            </div>

            <div className='pizza-text-container'>
              <h5 className='pizza-title'>{producto.name}</h5>
              <p className='pizza-desc'>{producto.desc}</p>

              <ul className='pizza-ingredients'>
                {producto.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              <div className='pizza-price-container'>
                <p className='pizza-price fs-3'>${producto.price}</p>
                <button onClick={() => agregarAlCarrito(producto)} className='btn btn-primary pizza-btn'>Añadir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pizza
