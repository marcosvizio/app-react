import React from 'react'

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])

    const addItem = (item, count) => {
        if(isInCart(item.id)){
            const newCart = cart.map(cartProd => {
                if(cartProd.id === item.id) {
                    cartProd.quantity++
                }
                return cartProd 
            })
            setCart(newCart)
        }else{
            setCart([...cart, {...item, quantity: +count}])
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter((prodCart) => {
            if(prodCart.id !== id){
                prodCart.quantity--
                if(prodCart.quantity === 0){
                    return false
                }
            }
            return prodCart
        })
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }
    
    return(
        <Provider value={{
            addItem,
            removeItem,
            clear,
            isInCart,
            cart
        }}>
        {children}
        </Provider>
    )
}

export {CartContext, CartProvider}