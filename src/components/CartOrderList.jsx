import React, { useContext } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { BiX } from "react-icons/bi";
import { CartCont } from '../context/CartContext';

const CartOrderList = ({ cartList }) => {

    const { id, image, title, desc, price, count } = cartList;
    const {deleteProduct} = useContext(CartCont);

    return (
        <div className='cart-order'>
            <div className='cart-order-content'>
                <img src={image} width={150} alt="" />
                <div>
                    <h3 className='cart-order-title'>{title}</h3>
                    <p className='cart-order-desc'>{desc}</p>
                </div>
            </div>
            <div className='cart-order-count'>
                <IoRemoveCircleOutline className='cart-order-minus' />
                <h3 className='cart-order-count-number'>{count}</h3>
                <IoAddCircleOutline className='cart-order-plus' />
            </div>
            <h3 className='cart-order-price'>{price} ₴</h3>
            <h3 className='cart-order-price-total'>{count * price} ₴</h3>
            <BiX onClick={() => deleteProduct(id)} className='delete-product' />
        </div>
    )
}

export default CartOrderList
