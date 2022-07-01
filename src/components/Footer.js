import React from 'react';

import classes from './Footer.module.scss';

import logoImg from '../assets/shared/desktop/logo.svg';
import facebookIcon from '../assets/shared/desktop/icon-facebook.svg';
import twitterIcon from '../assets/shared/desktop/icon-twitter.svg';
import instagramIcon from '../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
    return (
        <div className={`padding-x ${classes['footer']}`}>
            <div className={`flex flex-d-c flex-ai-c ${classes['flex-container']} ${classes['flex-container--1']}`}>
                <img className={classes['footer__logo']} src={logoImg} alt='logo' />
                <ul className={classes["footer__links"]}>
                    <li><a>Home</a></li>
                    <li><a>Headphones</a></li>
                    <li><a>Speakers</a></li>
                    <li><a>Earphones</a></li>
                </ul>
            </div>
            <p className={classes['footer__description']}>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className={`flex flex-d-c flex-jc-c ${classes['flex-container']} ${classes['flex-container--2']}`}>
                <p className={classes['footer__copyright']}>Copyright 2021. All Rights Reserved</p>
                <div className={classes['footer__social-media']}>
                    <img src={facebookIcon} alt='facebook icon' />
                    <img src={twitterIcon} alt='twittericon' />
                    <img src={instagramIcon} alt='instagram icon' />
                </div>
            </div>
        </div>
    );
};

export default Footer;