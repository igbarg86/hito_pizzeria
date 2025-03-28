import CardPizza from './CardPizza'
import './Home.css'
import { useEffect, useState } from 'react'

const Home = () => {
  const [productos, setProductos] = useState([])

  const URL = 'http://localhost:5000/api/pizzas'

  const getApi = async () => {
    try {
      const res = await fetch(URL)
      const data = await res.json()
      setProductos(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  console.log(productos)

  return (

    <div className='CardContainer'>
      <div className='row row-cols-1 row-cols-md-4 justify-content-center g-3'>
        {productos.map((producto) => (
          <div key={producto.id} className='col-md-4'>
            <CardPizza
              id={producto.id}
              price={producto.price}
              desc={producto.desc}
              img={producto.img}
              name={producto.name}
              ingredients={producto.ingredients}
            />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home
