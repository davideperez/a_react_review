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

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // El producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }

    ]))

    // ---  Solucion 3 --- //
  }
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
