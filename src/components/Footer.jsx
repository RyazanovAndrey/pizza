import React from 'react'
import Logo from '../../public/img/Logo.png'

const Footer = () => {

    const currentDate = new Date()

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <img src={Logo} width={200} alt="" />
                    Ecommerce {currentDate.getFullYear()}
                </div>
            </div>
        </div>
    )
}

export default Footer
