import { useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart-reducer'

export function useCartReducer () {
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

  return { addToCart, removeItemFromCart, clearCart, cart: state }
}
