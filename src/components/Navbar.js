import classes from './Navbar.module.scss';
import HamburgerButton from './HamburgerButton';
import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes["navbar__content"]}>
                <HamburgerButton />
                <img src={logo} alt="audiophile logo" />
                <img src={cart} alt="shopping cart" />
            </div>
        </div>
    );
}

export default Navbar;