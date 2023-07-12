import React, { useContext } from 'react'
import { CartCont } from '../context/CartContext'
import { BiShoppingBag } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import CartOrderList from '../components/CartOrderList';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart } = useContext(CartCont);

  console.log(cart)

  return (
    <div className='cart-page'>
      <div className="container">
        <div className='cart-header'>
          <div className="cart-wrapper">
            <BiShoppingBag className='cart-icon' />
            <h2 className='cart-title'>Кошик</h2>
          </div>
          <button className='cart-clear'><BiTrashAlt className='cart-delete-icon' />Очистити корзину</button>
        </div>
        {cart.map(item => (
          <CartOrderList cartList={item} />
        ))}
        <div className='cart-total'>
          <h3 className='cart-count-total'>Усього на замовлення: </h3>
          <h3 className='cart-count-total'>Сума замовлення: <span>0</span></h3>
        </div>
        <div>
          <Link to='/'>Повернутися назад</Link>
          <button>Повернутися назад</button>
          <button>Оплатити замовлення</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
