import React from 'react';
import classes from './HamburgerButton.module.scss';

const HamburgerButton = () => {
    return (
        <div className={classes["hamburger-btn"]}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default HamburgerButton;