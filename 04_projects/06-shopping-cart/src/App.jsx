import { useFilters } from './hooks/useFilters'
import Products from './components/Products'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { products as initialProducts } from './mock/products.json'
import Cart from './components/Cart'
import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
