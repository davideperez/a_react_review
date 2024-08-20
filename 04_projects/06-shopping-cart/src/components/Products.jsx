import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export default function Products ({ products }) {
  const { addToCart, removeItemFromCart, cart } = useCart()

  const handleOnClick = (product, productIsInCart) => {
    if (productIsInCart) {
      removeItemFromCart(product)
    } else {
      addToCart(product)
    }
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
                <div className='title-and-addRemove-button'>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      className={!productIsInCart ? 'add-to-cart' : 'remove-from-cart'}
                      onClick={() => handleOnClick(product, productIsInCart)}
                    >
                      {
                      productIsInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                      }
                    </button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
