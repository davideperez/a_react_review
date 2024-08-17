import { useContext, useState } from 'react'
import Products from './components/Products'
import { Header } from './components/Header'
// import { getProducts, getProducts } from './services/getProducts'
import { products as initialProducts } from './mock/products.json'
import Footer from './components/Footer'
import { FiltersContext } from './context/filters'

function useFilters () {
  /* const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  }) */

  const filters = useContext(FiltersContext)
  const setFilters = () => {}

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

  const onFilterProducts = (newFilters) => {
    return setFilters(newFilters)
  }

  return { filters, filterProducts, onFilterProducts }
}

function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, onFilterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={onFilterProducts} />
      <Products products={filteredProducts} />
      <Footer filter={filters} />
    </>
  )
}

export default App
