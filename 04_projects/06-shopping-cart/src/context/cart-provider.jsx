import { useCartReducer } from '../hooks/useCartReducer'
import { CartContext } from './cart-context'

// Crear Provider
// La dependencia de usar React Context, es MINIMA!
export function CartProvider ({ children }) {
  const { addToCart, removeItemFromCart, clearCart, cart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
