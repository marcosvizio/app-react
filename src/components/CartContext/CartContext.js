import React from 'react'

const CartContext = React.createContext()
const {Provider} = CartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])

    const addItem = ({item}) => {
        setCart([...cart, item])  
    }

    const removeItem = () => {

    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = () => {

    }

    console.log(cart);

  return (
    <Provider value={{
        addItem,
        removeItem,
        clearCart,
        isInCart,
        cart
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}