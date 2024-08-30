import './App.css'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Service from './components/Service.jsx'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
