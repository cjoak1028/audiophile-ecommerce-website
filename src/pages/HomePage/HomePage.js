import React from 'react';

import CategoryLinks from '@components/CategoryLinks/CategoryLinks';
import About from '@components/About/About';

import classes from './HomePage.module.scss';

import speakerImgMobile from '@assets/home/mobile/image-speaker-zx9.png';
import speakerImgTablet from '@assets/home/tablet/image-speaker-zx9.png';
import speakerImgDesktop from '@assets/home/desktop/image-speaker-zx9.png';

const HomePage = () => {
    return (
        <div className={classes['home-page']}>
            <div className={`banner banner--home`}>
                <div className={'banner__content'}>
                    <h6>New Product</h6>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <a className={'btn btn--orange'}>See Product</a>
                </div>
            </div>
            <div className={`content-wrapper padding-x ${classes["home__content"]}`}>
                <CategoryLinks />
                <div className={classes['featured-products']}>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--1']}`}>
                        <picture>
                            <source media="(min-width: 70em)" srcSet={speakerImgDesktop} />
                            <source media="(min-width: 37.5em)" srcSet={speakerImgTablet} />
                            <img src={speakerImgMobile} alt="speaker thumbnail" />
                        </picture>
                        <div className={classes['text-wrapper']}>
                            <h1>ZX9 <br /> Speaker</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <a className={'btn btn--black'}>See Product</a>
                        </div>
                    </div>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--2']}`}>
                        <h4>ZX7 Speaker</h4>
                        <a className={'btn btn--transparent'}>See Product</a>
                    </div>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--3']}`}>

                    </div>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--4']}`}>
                        <h4>YX1 Earphones</h4>
                        <a className={'btn btn--transparent'}>See Product</a>
                    </div>
                </div>
                <About />
            </div>
        </div >
    )
}

export default HomePage;