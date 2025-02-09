import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

const App = () => {
  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        {/* <Home /> */}
        <main className='flex-fill'>
          {/* <RegisterPage /> */}
          <LoginPage />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
