import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductCont = createContext();

const ProductContext = ({ children }) => {

  const [product, SetProduct] = useState([]);

  const [search, setSearch] = useState('');
  const [paginate, setPaginate] = useState(1)

  const searchProduct = search ? `title=${search}` : ''

  useEffect(() => {
    axios.get(`https://64a901138b9afaf4844a2627.mockapi.io/pizza?${searchProduct}&page=${paginate}&limit=8`).then(res => {
      SetProduct(res.data)

      window.scrollTo(0, 0)
    })
  }, [search, paginate])

  return (
    <div>
      <ProductCont.Provider value={{product, search, setSearch, setPaginate}}>
        {children}
      </ProductCont.Provider>
    </div>
  )
}

export default ProductContext
