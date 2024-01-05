import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import ContactUs from './pages/ContactUs'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <BrowserRouter>
      <div className="w-full min-h-dvh bg-gray-200">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path='/productdetails/:id' element={<ProductDetails/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App