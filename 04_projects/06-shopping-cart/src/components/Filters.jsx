import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, onFilterChange } = useFilters()

  const [minPriceFilterId] = useId()
  const [categoryFilterId] = useId()

  const handleChangeMinPrice = (event) => {
    const selectedMinPrice = event.target.value

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
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
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
