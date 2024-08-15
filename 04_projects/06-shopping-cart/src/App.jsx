import { useState } from 'react'
import Products from './components/Products'
// import { getProducts, getProducts } from './services/getProducts'
import { products as initialProducts } from './mock/products.json'

function App () {
  const [products] = useState(initialProducts)

  return (
    <>
      <h1>Shopping Cart: 🛒</h1>
      <Products products={products} />
    </>
  )
}

export default App
