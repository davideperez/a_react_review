import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { onFilterChange } = useFilters()
  const [minPrice, setMinPrice] = useState(0)

  const [minPriceFilterId] = useId()
  const [categoryFilterId] = useId()

  const handleChangeMinPrice = (event) => {
    const selectedMinPrice = event.target.value
    setMinPrice(selectedMinPrice)
    // Esto huele mal.
    // Porque con el onChange, estamos pasando la funcion de actualizar estado..
    // ..nativa de react, a un componente hijo.
    onFilterChange(prevState => {
      console.log('prevState: ', prevState)
      return {
        ...prevState,
        minPrice: selectedMinPrice
      }
    })
  }

  const handleChangeCategory = (event) => {
    const selectedCategory = event.target.value
    // Esto huele mal.
    // Porque con el onChange, estamos pasando la funcion de actualizar estado..
    // ..nativa de react, a un componente hijo.
    onFilterChange(prevState => {
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
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='furniture'>Furniture</option>
        </select>
      </div>
    </section>
  )
}
