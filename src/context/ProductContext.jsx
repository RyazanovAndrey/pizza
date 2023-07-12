import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductCont = createContext();

const ProductContext = ({ children }) => {

  const [product, SetProduct] = useState([]);

  const [search, setSearch] = useState('');
  const [paginate, setPaginate] = useState(1)
  const [sortList, setSortList] = useState({ name: 'Ціна збільшення', sort: 'price' })
  const [activeSort, setActiveSort] = useState(0)

  const searchProduct = search ? `title=${search}` : ''
  const sortProductMinus = sortList.sort.includes('-') ? 'desc' : 'asc';
  const sortProductMinusMinus = sortList.sort.replace('-', '')
  const filterProduct = activeSort > 0 ? `category=${activeSort}` : ''


  useEffect(() => {
    axios.get(`https://64a901138b9afaf4844a2627.mockapi.io/pizza?${searchProduct}&page=${paginate}&limit=8&sortBy=${sortProductMinusMinus}&order=${sortProductMinus}&${filterProduct}`).then(res => {
      SetProduct(res.data)

      window.scrollTo(0, 0)
    })
  }, [search, paginate, sortList, activeSort])

  return (
    <div>
      <ProductCont.Provider value={{ product, search, setSearch, setPaginate, sortList, setSortList, activeSort, activeSort,  setActiveSort}}>
        {children}
      </ProductCont.Provider>
    </div>
  )
}

export default ProductContext
