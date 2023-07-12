import React from 'react'
import Logo from '../../public/img/Logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <img src={Logo} width={200} alt="" />
                    Ecommerce 2023
                </div>
            </div>
        </div>
    )
}

export default Footer
