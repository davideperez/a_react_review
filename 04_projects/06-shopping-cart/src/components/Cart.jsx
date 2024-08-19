import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'

export default function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
              alt='Mascara'
            />
            <div>
              <strong>Mascara - $9.99</strong>
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
      <button>
        <ClearCartIcon />
      </button>
    </>
  )
}
