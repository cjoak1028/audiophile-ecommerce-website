import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.module.scss';

import logoImg from '../assets/shared/desktop/logo.svg';

const Footer = () => {
    return (
        <div className={`padding-x ${classes['footer']}`}>
            <div className={`flex flex-d-c flex-ai-c ${classes['flex-container-1']}`}>
                <img className={classes['footer__logo']} src={logoImg} alt='logo' />
                <ul className={classes["footer__links"]}>
                    <li><Link className={classes['footer__link']} to="/">Home</Link></li>
                    <li><Link className={classes['footer__link']} to="/headphones">Headphones</Link></li>
                    <li><Link className={classes['footer__link']} to="/speakers">Speakers</Link></li>
                    <li><Link className={classes['footer__link']} to="/earphones">Earphones</Link></li>
                </ul>
            </div>
            <p className={classes['footer__description']}>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className={`flex flex-d-c flex-jc-c ${classes['flex-container-2']}`}>
                <p className={classes['footer__copyright']}>Copyright 2021. All Rights Reserved</p>
                <div className={`flex flex-jc-c flex-ai-c ${classes['footer__social-media']}`}>
                    <div className={classes['footer__icon-wrapper']}></div>
                    <div className={classes['footer__icon-wrapper']}></div>
                    <div className={classes['footer__icon-wrapper']}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;