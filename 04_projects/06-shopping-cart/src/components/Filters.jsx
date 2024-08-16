import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all')

  const handleChangeMinPrice = (event) => {
    const selectedMinPrice = event.target.value
    setMinPrice(selectedMinPrice)
    // Esto huele mal.
    // Porque con el onChange, estamos pasando la funcion de actualizar estado..
    // ..nativa de react, a un componente hijo.
    onChange(prevState => {
      console.log('prevState: ', prevState)
      return {
        ...prevState,
        minPrice: selectedMinPrice
      }
    })
  }

  const handleChangeCategory = (event) => {
    const selectedCategory = event.target.value
    setCategory(selectedCategory)
    // Esto huele mal.
    // Porque con el onChange, estamos pasando la funcion de actualizar estado..
    // ..nativa de react, a un componente hijo.
    onChange(prevState => {
      console.log('prevState: ', prevState)
      return {
        ...prevState,
        category: selectedCategory
      }
    })
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='furniture'>Furniture</option>
        </select>
      </div>
    </section>
  )
}
