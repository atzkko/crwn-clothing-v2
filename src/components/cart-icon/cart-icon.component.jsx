import {useContext} from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { open, setOpen } = useContext(CartContext)

    const handleClick = () => setOpen(!open)

    return (
        <div className="cart-icon-container" onClick={handleClick}>
            <ShoppingIcon className="shopping-icon" />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;