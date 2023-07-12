import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const CartCont = createContext();

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([]);

  const [cartTotal, setCartTotal] = useState(0)
  const [cartSum, setCartSum] = useState(0)

  useEffect(() => {
    axios.get('https://64a901138b9afaf4844a2627.mockapi.io/cart').then(res => {
      setCart(res.data)
    })
  }, [])

  useEffect(() => {
    const totalCart = cart.reduce((total, item) => total = total + item.count, 0)
    setCartTotal(totalCart);
  }, [cart])

  useEffect(() => {
    const totalSum = cart.reduce((total, item) => total = total + item.count * item.price, 0)
    setCartSum(totalSum);
  })

  const addToCart = (product) => {

    const newProduct = { ...product, count: 1 }
    const findProduct = cart.find(item => item.id == newProduct.id);

    if (findProduct) {
      setCart(cart.map(item => {
        if (item.id == findProduct.id) {
          return { ...item, count: item.count + 1 }
        }
        return item
      }))

      const newProductApi = {
        ...findProduct,
        count: findProduct.count + 1
      }
      axios.put(`https://64a901138b9afaf4844a2627.mockapi.io/cart/${product.id}`, newProductApi)
    } else {
      setCart([...cart, newProduct])
      axios.post('https://64a901138b9afaf4844a2627.mockapi.io/cart', newProduct)
    }
  }

  const deleteProduct = (id) => {
    setCart(cart.filter(item => item.id != id));
    axios.delete(`https://64a901138b9afaf4844a2627.mockapi.io/cart/${id}`)
  }

  return (
    <div>
      <CartCont.Provider value={{ cart, addToCart, cartTotal, cartSum, deleteProduct }}>
        {children}
      </CartCont.Provider>
    </div>
  )
}

export default CartContext
