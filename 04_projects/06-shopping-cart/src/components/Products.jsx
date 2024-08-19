import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export default function Products ({ products }) {
  const { addToCart, cart } = useCart()

  const handleOnClick = (product) => {
    console.log('product', product)
    addToCart(product)
  }

  const checkIfProudctIsInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => {
            const productIsInCart = checkIfProudctIsInCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button className={!productIsInCart ? '' : 'remove-from-cart-icon'} onClick={() => handleOnClick(product)}>
                    {
                     productIsInCart
                       ? <RemoveFromCartIcon />
                       : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
