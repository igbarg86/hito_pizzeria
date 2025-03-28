import { createContext, useState } from 'react'

const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const clearCart = () => {
    setCart([])
  }

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0)
  }

  const agregarAlCarrito = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id)

      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...pizza, count: 1 }]
      }
    })
  }

  const aumentarCantidad = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ))
  }

  const disminuirCantidad = (id) => {
    setCart(cart.map((item) =>
      item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ).filter(item => item.count > 0))
  }

  const eliminarProducto = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const stateGlobal = {
    cart,
    clearCart,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    calcularTotal
  }

  return (
    <cartContext.Provider value={stateGlobal}>
      {children}
    </cartContext.Provider>
  )
}

export default cartContext
