import CardPizza from './CardPizza'
import Header from './Header'
import './Home.css'

const Home = () => {
  return (
    <>
      <Header />

      <main className='CardContainer'>

        <CardPizza
          img='./src/assets/img/napolitana.jpg'
          name='Pizza Napolitana'
          titulo='Ingredientes:'
          ingredients=' mozzarella, tomates, jamón, orégano '
          price='Precio: $5950'
        />

        <CardPizza
          img='./src/assets/img/española.jpg'
          name='Pizza Española'
          titulo='Ingredientes:'
          ingredients=' mozzarella, gorgonzola, parmesano, provolone '
          price='Precio: $6950'
        />

        <CardPizza
          img='./src/assets/img/pepperoni.jpg'
          name='Pizza Pepperoni'
          titulo='Ingredientes:'
          ingredients=' mozzarella, pepperoni, orégano '
          price='Precio: $4550'
        />

        <CardPizza
          img='./src/assets/img/pizza_extra_5.jpg'
          name='Cuatro Quesos'
          titulo='Ingredientes:'
          ingredients=' mozzarella, gorgonzola, fontina, parmesano '
          price='Precio: $7950'
        />

        <CardPizza
          img='./src/assets/img/pizza_extra_6.jpg'
          name='Pizza Hawai'
          titulo='Ingredientes:'
          ingredients=' mozzarella, aceituna, tomate, jamon '
          price='Precio: $9950'
        />

        <CardPizza
          img='./src/assets/img/pizza_extra_7.jpg'
          name='Pizza Diavola'
          titulo='Ingredientes:'
          ingredients=' mozzarella, champiñones, aceitunas, orégano '
          price='Precio: $6550'
        />

      </main>
    </>
  )
}

export default Home
