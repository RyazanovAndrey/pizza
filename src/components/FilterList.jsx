import React, { useState } from 'react'

const FilterList = () => {

    const filterList = ['Всі', 'Курка', 'Гриби', 'Папероні', 'Сир']
    const [activeSort, setActiveSort] = useState(0)

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
