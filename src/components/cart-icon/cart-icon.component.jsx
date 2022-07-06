import {useContext} from "react";

import { CartContext } from "../../contexts/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const { open, setOpen, cartCount } = useContext(CartContext)

    const handleClick = () => setOpen(!open)

    return (
        <CartIconContainer className="cart-icon-container" onClick={handleClick}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;