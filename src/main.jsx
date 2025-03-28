import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartProvider>
  </StrictMode>
)
