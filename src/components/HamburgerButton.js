import React from 'react';
import classes from './HamburgerButton.module.scss';

const HamburgerButton = (props) => {
    return (
        <div className={classes["hamburger-btn"]} onClick={() => props.setOpenMenu(!props.openMenu)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default HamburgerButton;