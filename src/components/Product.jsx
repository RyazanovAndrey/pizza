import React, { useContext, useState } from 'react'
import { BiPlus } from "react-icons/bi";
import { CartCont } from '../context/CartContext';

const Product = ({ productList }) => {

  const {addToCart} = useContext(CartCont)

  const { id, image, title, size, price } = productList;
  const [activeSize, setActiveSize] = useState(0)

  return (
    <div className='product-card'>
      <img className='product-img' width={250} src={image} alt="" />
      <h3 className='product-title'>{title}</h3>
      <ul className='product-size'>
        {size.map((item, i) => (
          <li onClick={() => setActiveSize(i)} className={`product-size-item ${activeSize == i ? 'active' : ''}`}>{item} см</li>
        ))}
      </ul>
      <div className='product-wrapper'>
        <h3 className='product-price'>{price} ₴</h3>
        <button onClick={() => addToCart(productList)} className='product-btn'><BiPlus className='product-plus' />В кошик</button>
      </div>
    </div>
  )
}

export default Product
