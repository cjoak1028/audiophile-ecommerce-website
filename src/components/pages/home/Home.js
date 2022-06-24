import React from 'react';

import ProductLinks from '../../shared/ProductLinks';
import classes from './Home.module.scss';

import speakerZx9Img from '../../../assets/home/mobile/image-speaker-zx9.png';

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
            <div className={`content-wrapper padding-x ${classes["home__content"]}`}>
                <ProductLinks />
                <div className={classes['home-gallery']}>
                    <div className={classes['home-gallery__cell-1']}>
                        <div>
                            <img src={speakerZx9Img}></img>
                            <h1>ZX9 Speaker</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <a className={'btn btn--black'}>See Product</a>
                        </div>
                    </div>
                    <div className={classes['home-gallery__cell-2']}>
                        <h4>ZX7 Speaker</h4>
                        <a className={'btn btn--transparent'}>See Product</a>
                    </div>
                    <div className={classes['home-gallery__cell-3']}>3</div>
                    <div className={classes['home-gallery__cell-4']}>4</div>
                </div>
            </div>
        </div >
    )
}

export default Home;