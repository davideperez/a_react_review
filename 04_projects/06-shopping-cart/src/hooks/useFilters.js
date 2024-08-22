import { useContext } from 'react'
import { FiltersContext } from '../context/filters-context'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const onFilterChange = (newFilters) => {
    return setFilters(newFilters)
  }

  return { filters, filterProducts, onFilterChange }
}
