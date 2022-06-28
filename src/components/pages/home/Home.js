import React from 'react';

import CategoryLinks from '../../shared/CategoryLinks/CategoryLinks';
import classes from './Home.module.scss';

import speakerZx9Img from '../../../assets/home/mobile/image-speaker-zx9.png';
import earphonesYx1Img from '../../../assets/home/mobile/image-earphones-yx1.jpg';

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.banner}>
                <div className={classes["banner__content"]}>
                    <h6>New Product</h6>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <a className={'btn btn--orange'}>See Product</a>
                </div>
            </div>
            <div className={`content-wrapper ${classes["home__content"]}`}>
                <CategoryLinks />
                <div className={classes['featured-products']}>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--1']}`}>
                        <img src={speakerZx9Img} />
                        <h1>ZX9 Speaker</h1>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <a className={'btn btn--black'}>See Product</a>
                    </div>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--2']}`}>
                        <h4>ZX7 Speaker</h4>
                        <a className={'btn btn--transparent'}>See Product</a>
                    </div>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--3']}`}>
                        <img src={earphonesYx1Img} />
                    </div>
                    <div className={`${classes['featured-products__cell']} ${classes['featured-products__cell--4']}`}>
                        <h4>YX1 Earphones</h4>
                        <a className={'btn btn--transparent'}>See Product</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;