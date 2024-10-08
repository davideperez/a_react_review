// Actions

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Reducer initial state.
// Local Storage Persistence
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// Updates local storage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // Solucion 1  - con structuredClone ( 👀 La mas legible)
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      // Solucion 2  - con map ( 👶 La mas facil)
      /* const newState = state.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      }) */

      // Solucion 3  - con spread operator y slice ( ⚡ La mas rapida )
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: (state, action) => {
    updateLocalStorage([])
    return []
  }
}

// Reducer function

export const cartReducer = (state, action) => {
  const { type: actionType } = action // actionPayload es el producto actual.

  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState ? updateState(state, action) : state
}
