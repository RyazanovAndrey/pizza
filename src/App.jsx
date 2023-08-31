import React from 'react'
import './scss/main.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<ProductList />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
