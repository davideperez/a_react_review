import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import Products from './components/Products'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { products as initialProducts } from './mock/products.json'

function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer filter={filters} />
    </>
  )
}

export default App
