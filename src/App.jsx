
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Certificate from './components/Certificate'
import Footer from './components/Footer'

function App() {


  return (
 <BrowserRouter>
        <Navbar/>
 <Routes>

    <Route path='/'  element={<Home/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/services'  element={<Services/>} />
    <Route path='/products'  element={<Products/>} />
    <Route path='/certificates'  element={<Certificate/>} />

 </Routes>
<Footer/>

</BrowserRouter>
  )
}

export default App
