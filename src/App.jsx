import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './pages/Header'

const App = () => {
  return (

    <BrowserRouter>
      <div className='d-flex flex-column min-vh-300'>
        <main className='flex-fill'>
          <CartProvider>
            <Navbar />
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/pizza/p001' element={<Pizza />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </CartProvider>
          <Footer />
        </main>
      </div>
    </BrowserRouter>

  )
}

export default App
