import React, { useState } from 'react';

import classes from './Navbar.module.scss';

import HamburgerButton from './HamburgerButton';
import ProductLinks from './ProductLinks';

import logo from '../../assets/shared/desktop/logo.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    }

    return (
        <React.Fragment>
            <div className={classes.navbar}>
                <div className={`padding-x ${classes["navbar__content"]}`}>
                    <HamburgerButton toggleMenu={toggleMenu} />
                    <div className={classes["logo-container"]}>
                        <img className={classes.logo} src={logo} alt="audiophile logo" />
                    </div>
                    <div className={classes["navbar__links"]}>
                        <a>Home</a>
                        <a>Headphones</a>
                        <a>Speakers</a>
                        <a>Earphones</a>
                    </div>
                    <img className={classes.cart} src={cart} alt="shopping cart" />
                </div>
            </div>
            <div className={classes["hamburger-menu"]}>
                {openMenu ? <ProductLinks /> : ''}
            </div>
        </React.Fragment>
    );
}

export default Navbar;