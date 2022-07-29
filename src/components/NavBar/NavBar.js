import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import classes from './NavBar.module.scss';

import CategoryLinks from '@components/CategoryLinks/CategoryLinks';

import logo from '@assets/shared/desktop/logo.svg';

export const HamburgerMenuContext = React.createContext(
    { setOpenMenu: () => { } }
);

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const isMounted = useRef(false);

    const value = { openMenu, setOpenMenu };

    // Since useEffect hook will always run on mount, isMMounted is used to prevent body.classList from toggling
    // on initial render. Only after initial render will body.classList toggle whenever there is a change in openMenu's state
    useEffect(() => {
        console.log(isMounted.current)
        if (isMounted.current) {
            document.body.classList.toggle('overflow-hidden');
        } else {
            isMounted.current = true;
        }
    }, [openMenu]);

    const toggleMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    }

    const hamburgerMenu = (
        <div className={'overlay'}>
            <div className={classes["hamburger-menu"]}>
                <CategoryLinks />
            </div>
        </div>
    )

    return (
        <HamburgerMenuContext.Provider value={value}>
            <div className={classes.navbar}>
                <div className={`padding-x ${classes["navbar__content"]}`}>
                    <div className={classes["navbar__hamburger-btn"]} onClick={() => toggleMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={classes["navbar__logo-container"]}>
                        <Link className={classes["navbar__logo-link"]} to="/">
                            <img className={classes['navbar__logo-img']} src={logo} alt="audiophile logo" />
                        </Link>
                    </div>
                    <ul className={classes["navbar__links"]}>
                        <li><Link className={classes["navbar__link"]} to="/">Home</Link></li>
                        <li><Link className={classes["navbar__link"]} to="/headphones">Headphones</Link></li>
                        <li><Link className={classes["navbar__link"]} to="/speakers">Speakers</Link></li>
                        <li><Link className={classes["navbar__link"]} to="/earphones">Earphones</Link></li>
                    </ul>
                    <div className={classes['navbar__cart']}>
                    </div>
                </div>
            </div>
            {openMenu ? hamburgerMenu : ''}
        </HamburgerMenuContext.Provider>
    );
}

export default NavBar;

// Reference: https://typeofnan.dev/how-to-prevent-useeffect-from-running-on-mount-in-react/