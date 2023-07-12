import React, { useContext, useState } from 'react'
import { ProductCont } from '../context/ProductContext'

const FilterList = () => {

  const {activeSort, setActiveSort} = useContext(ProductCont)

    const filterList = ['Всі', 'Курка', 'Гриби', 'Папероні', 'Сир','Морепродукти']

  return (
    <div className='filter-list'>
      <ul className='filter-menu'>
        {filterList.map((item, i) => (
            <li key={i} onClick={() => setActiveSort(i)} className={`filter-item ${activeSort == i ? 'active' : ''}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FilterList
