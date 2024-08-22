import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart-reducer'

// 1. Crear Contexto
export const CartContext = createContext()

// 2. Crear Provider
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => {
    return dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  const removeItemFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = product => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeItemFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
