import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        <main className='flex-fill'>
          {/* <Home /> */}
          <Cart />
          {/* <RegisterPage /> */}
          {/* <LoginPage /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
