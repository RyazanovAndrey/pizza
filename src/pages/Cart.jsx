import React, { useContext } from 'react'
import { CartCont } from '../context/CartContext'
import { BiShoppingBag } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import CartOrderList from '../components/CartOrderList';
import { Link } from 'react-router-dom';
import { BiPlus } from "react-icons/bi";
import NullPizza from '../../public/img/null-pizza.jpg'
import axios from 'axios';

const Cart = () => {

  const { cart, setCart, cartTotal, cartSum } = useContext(CartCont)

  const clearCart = () => {
    setCart([])
    axios.delete('https://64a901138b9afaf4844a2627.mockapi.io/cart')
  }

  return (
    <div className='cart-page'>
      <div className="container">
        <div className='cart-header'>
          <div className="cart-wrapper">
            <BiShoppingBag className='cart-icon' />
            <h2 className='cart-title'>Кошик</h2>
          </div>
          <button onClick={clearCart} className='cart-clear'><BiTrashAlt className='cart-delete-icon' />Очистити кошик</button>
        </div>
        {cart.length > 0 ?
          <>
            {
              cart.map(item => (
                <CartOrderList cartList={item} />
              ))
            }
            < div className='cart-total'>
              <h3 className='cart-count-total'>Усього на замовлення: <span style={{ fontWeight: 'bold' }}>{cartTotal}</span></h3>
              <h3 className='cart-count-total'>Сума замовлення: <span style={{ fontWeight: 'bold', color: '#FE5F1E' }}>{cartSum} ₴</span></h3>
            </div>
            <div className='cart-button-group'>
              <Link to='/' className='cart-back'>Повернутися назад</Link>
              <a href="#" className="cart-offer"><BiPlus style={{ fontSize: '20px', marginRight: '10px' }} />Оплатити замовлення</a>
            </div>
          </>
          :
          <div className='cart-null'>
            <h3 className='cart-null-title'>Кошик порожній</h3>
            <p className='cart-null-text'>У кошику поки що ні чого немає. Перейдіть на головну сторінку для замовлення піци</p>
            <img src={NullPizza} width={400} alt="" />
            <Link to='/' className='cart-null-back'>Повернутися назад</Link>
          </div>
        }
      </div>
    </div >
  )
}

export default Cart
