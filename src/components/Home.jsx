import CardPizza from './CardPizza'
import Header from './Header'
import './Home.css'
import { pizzas } from '../data/pizzas'

const Home = () => {
  return (

    <div className='CardContainer my-4'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {pizzas.map(pizza => (
          <div className='col' key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home
