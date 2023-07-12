import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'
import CartContext from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductContext>
        <CartContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartContext>
    </ProductContext>
)
