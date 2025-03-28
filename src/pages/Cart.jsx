import { useContext } from 'react'
import cartContext from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { toast, Toaster } from 'sonner'

const Cart = () => {
  const { cart, aumentarCantidad, disminuirCantidad, eliminarProducto, calcularTotal } = useContext(cartContext)
  const { token } = useContext(UserContext)

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
  }

  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error('Tu carrito está vacío.')
      return
    }

    if (!token) {
      toast.error('Debes estar logueado para realizar el pago.')
      return
    }

    console.log('Datos del carrito que se están enviando:', cart)

    try {
      const response = await axios.post(
        'http://localhost:5000/api/checkouts',
        { cart },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log('Respuesta del servidor:', response)

      if (response.status === 200) {
        toast.success('Compra realizada con éxito. ¡Gracias por tu compra!')
      }
    } catch (error) {
      console.error('Error al realizar el checkout:', error)
      toast.error('Ocurrió un error al procesar el pago.')
    }
  }

  return (
    <div className='container d-flex flex-column min-vh-100 mt-5'>
      <h2 className='text-center mb-4 text-uppercase font-weight-bold'>Detalles del pedido:</h2>

      {cart.map((item) => (
        <div className='card mb-3 shadow-sm rounded' key={item.id} style={{ border: 'none' }}>
          <div className='row g-0 d-flex align-items-center'>
            <div className='col-md-2'>
              <img
                src={item.img}
                className='img-fluid rounded-start'
                alt={item.name}
                style={{ height: '100px', objectFit: 'cover' }}
              />
            </div>

            <div className='col-md-10'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='card-title text-capitalize'>{item.name}</h5>
                <div className='d-flex align-items-center gap-3'>
                  <p className='card-text mb-0'>{formatPrice(item.price)}</p>
                  <div className='d-flex align-items-center gap-2'>
                    <button
                      className='btn btn-outline-danger btn-sm'
                      onClick={() => disminuirCantidad(item.id)}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className='btn btn-outline-success btn-sm'
                      onClick={() => aumentarCantidad(item.id)}
                      style={{ marginRight: '30px' }}
                    >
                      +
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm me-5'
                      onClick={() => eliminarProducto(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='text-end mt-4 p-3 rounded bg-light'>
        <h3 className='text-primary font-weight-bold'>Total: {formatPrice(calcularTotal())}</h3>
        <button
          className='btn btn-primary btn-lg mt-3'
          onClick={handleCheckout}
          disabled={!token || cart.length === 0}
        >
          Pagar
        </button>
      </div>

      <Toaster position='top-center' richColors expand />
    </div>
  )
}

export default Cart
