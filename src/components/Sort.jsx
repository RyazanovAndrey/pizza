import React, { useState } from 'react'

const Sort = () => {

  const [opnList, setOpnList] = useState(false)
  const [sortList, setSortList] = useState({ name: 'Ціною', sort: 'price' })

  const sortProduct = [
    { name: 'Ціною', sort: 'price' },
    { name: 'Алфавітом (a-я)', sort: 'title' },
  ]

  return (
    <div className='sort-list'>
      <h3>Сортувати за:</h3>
      <h3 onClick={() => setOpnList(!opnList)} className='sort-title'>{sortList.name}</h3>
      {opnList &&
        <ul className='sort-order'>
          {sortProduct.map(item => (
            <li key={item.sort} onClick={() => {setSortList(item); setOpnList(false)}} className={item.sort == sortList.sort ? 'sort-item active' : 'sort-item'}>{item.name}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Sort
