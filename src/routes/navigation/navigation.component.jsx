import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";
// import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { open } = useContext(CartContext)

    return (
        <>
            <NavigationContainer className={'navigation'}>
                <LogoContainer className={'logo-container'} to={'/'}>
                    <CrwnLogo className={'crwn-logo'} />
                </LogoContainer>
                <NavLinks className={'nav-links-container'}>
                    <NavLink className={'nav-link'} to={'/shop'}>SHOP</NavLink>
                    {
                        currentUser ?  (
                            <NavLink as='span' className='nav-link' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink className='nav-link' to='/auth'>SIGN IN</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {open && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;