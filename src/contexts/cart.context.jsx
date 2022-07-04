import {createContext, useEffect, useState} from 'react'
import cartItemComponent from "../components/cart-item/cart-item.component";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find( (cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}


// as the actual value you want to access
export const CartContext = createContext({
    open: false,
    setOpen: () => null,
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { open, setOpen, addItemToCart, cartItems, cartCount }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}