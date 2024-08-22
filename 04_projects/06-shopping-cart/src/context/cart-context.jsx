import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

// 1. Crear Contexto
export const CartContext = createContext()

// 2. Crear Provider
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
