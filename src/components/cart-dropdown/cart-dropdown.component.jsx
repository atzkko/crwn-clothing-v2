import { useContext } from "react";
import {CartContext} from "../../contexts/cart.context";
import Button from "../button/button.component";
import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown;