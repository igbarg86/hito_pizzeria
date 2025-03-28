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
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './pages/Header'
import { UserContext } from './context/UserContext'
import { useContext } from 'react'

const App = () => {
  const { token } = useContext(UserContext)
  return (

    <BrowserRouter>
      <div className='d-flex flex-column min-vh-300'>
        <main className='flex-fill'>
          <Navbar />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={token ? <Navigate to='/' /> : <RegisterPage />} />
            <Route path='/login' element={token ? <Navigate to='/' /> : <LoginPage />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>

  )
}

export default App
