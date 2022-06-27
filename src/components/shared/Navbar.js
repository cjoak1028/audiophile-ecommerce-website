import React, { useState } from 'react';

import classes from './Navbar.module.scss';

import CategoryLinks from './CategoryLinks';

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
                    <div className={classes["navbar__hamburger-btn"]} onClick={() => toggleMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={classes["navbar__logo"]}>
                        <img className={classes['navbar__logo-img']} src={logo} alt="audiophile logo" />
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
                {openMenu ? <CategoryLinks /> : ''}
            </div>
        </React.Fragment>
    );
}

export default Navbar;