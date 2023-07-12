import React, { useContext } from 'react'
import Logo from '../../public/img/Logo.png'
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { CartCont } from '../context/CartContext';
import { ProductCont } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Header = () => {

  const {cartTotal, cartSum} = useContext(CartCont);
  const {search, setSearch} = useContext(ProductCont);

  return (
    <header className='header'>
      <div className="container">
        <div className="wrapper">
          <Link to='/'><div className="logo"><img src={Logo} alt="" /></div></Link>
          <div className='search'>
            <div className='search-wrapper'>
              <BiSearch className='search-icon' />
              <input className='search-field' type="text" placeholder='Шукати піцу...' value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <BiX onClick={() => setSearch('')} className='search-clear' />
          </div>

          <Link to='/cart'>
          <div className="cart">
            <div className="cart-left">{cartSum} ₴</div>
            <div className="cart-right">
              <BiShoppingBag className='cart-icon' />
              <h3 className='cart-sum'>{cartTotal}</h3>
              </div>
          </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
