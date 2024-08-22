// Reducer initial state.

export const cartInitialState = []

// Reducer function

export const cartReducer = (state, action) => {
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
      return cartInitialState
    }
  }

  return state
}
