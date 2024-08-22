import { createContext, useReducer } from 'react'

// 1. Crear Contexto
export const CartContext = createContext()

// Reducer initial state.

const initialState = []

// Reducer function

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action // actionPayload es el producto actual.

  switch (actionType) {
    case 'ADD_TO_CART' : {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART' : {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      return newState
    }

    case 'CLEAR_CART' : {
      return initialState
    }
  }

  return state
}

// 2. Crear Provider
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

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
