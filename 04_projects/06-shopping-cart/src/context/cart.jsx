import { createContext, useState } from 'react'

// 1. Crear Contexto
export const CartContext = createContext()

// 2. Crear Provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // ---  Solucion 1 --- //
    // setCart(...cart, product)

    // ---  Solucion 2 --- //
    // Check if product is already in cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    // Si el producto ya esta en el carrito
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // Si el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }

    ]))
  }

  const removeItemFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

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
