import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
