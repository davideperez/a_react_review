import { useState } from 'react'
import './Filters.css'

export function Filters () {
  const [minPrice, setMinPrice] = useState()

  const handleChangeMinPrice = (event) => {
    const selectedMinPrice = event.target.value
    setMinPrice(selectedMinPrice)
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id='category'>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='furniture'>Furniture</option>
        </select>
      </div>
    </section>
  )
}
