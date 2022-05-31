import React, { useState } from 'react';

import classes from './Navbar.module.scss';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <React.Fragment>
            <div className={classes.navbar}>
                <div className={classes["navbar__content"]}>
                    <HamburgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    <img src={logo} alt="audiophile logo" />
                    <img src={cart} alt="shopping cart" />
                </div>
            </div>
            {openMenu ? <HamburgerMenu /> : ''}
        </React.Fragment>
    );
}

export default Navbar;