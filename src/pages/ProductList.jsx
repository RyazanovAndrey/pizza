import React, { useContext } from 'react'
import FilterList from '../components/FilterList'
import Sort from '../components/Sort'
import { ProductCont } from '../context/ProductContext'
import Product from '../components/Product'
import ReactPaginate from 'react-paginate';
import slider from '../../public/img/pizza3.jpg'

const ProductList = () => {

  const { product, setPaginate } = useContext(ProductCont)

  return (
    <main>
      <section className='product-list'>
        <div className="container">
          <img src={slider} alt="" className='slider-img' />
          <div className='product-sort'>
            <FilterList />
            <Sort />
          </div>
          <h2 className='product-list-item'>Всі піцци</h2>
          <div className="products">
            {product.map(item => (
              <Product productList={item} />
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Вперед >"
            onPageChange={e => setPaginate(e.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="< Назад"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='prev'
            nextLinkClassName='next'
            activeClassName='tab-active'

          />
        </div>
      </section>
    </main>
  )
}

export default ProductList
