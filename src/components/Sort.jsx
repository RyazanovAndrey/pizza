import React, { useContext, useState } from 'react'
import { BiSolidChevronDown } from "react-icons/bi";
import { ProductCont } from '../context/ProductContext';

const Sort = () => {

  const [opnList, setOpnList] = useState(false)

  const {sortList, setSortList} = useContext(ProductCont);

  const sortProduct = [
    { name: 'Ціна збільшення', sort: 'price' },
    { name: 'Ціна зменшення', sort: '-price' },
    { name: 'Найменуванням (a-я)', sort: 'title' },
    { name: 'Найменуванням (я-a)', sort: '-title' },
  ]

  return (
    <div className='sort-list'>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <BiSolidChevronDown style={{marginRight: '10px', fontSize: '20px'}} />
        <h3>Сортувати за:</h3>
      </div>
      <h3 onClick={() => setOpnList(!opnList)} className='sort-title'>{sortList.name}</h3>
      {opnList &&
        <ul className='sort-order'>
          {sortProduct.map(item => (
            <li key={item.sort} onClick={() => { setSortList(item); setOpnList(false) }} className={item.sort == sortList.sort ? 'sort-item active' : 'sort-item'}>{item.name}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Sort
