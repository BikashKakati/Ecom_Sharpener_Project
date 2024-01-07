import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import ContactUs from './pages/ContactUs'
import ProductDetails from './pages/ProductDetails'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <div className="w-full min-h-dvh bg-gray-200">
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="store" element={<PrivateRoute> <Store /> </PrivateRoute>} />
          <Route path='productdetails/:id' element={<PrivateRoute><ProductDetails /></PrivateRoute>}>
            <Route path='comments' element={<h2>Comments</h2>} />
          </Route>
          <Route
            path="about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>}
          />
          <Route path="contactus" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
          <Route path="*" element={<h1 className='text-center text-4xl'>Unable to find the page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App