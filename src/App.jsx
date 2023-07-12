import React from 'react'
import './scss/main.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ProductList from './pages/ProductList'
import ProductSingle from './components/ProductSingle'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<ProductList />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/product/:id' element={<ProductSingle />}></Route>
    </Routes>
    </>
  )
}

export default App
