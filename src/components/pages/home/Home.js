import React from 'react';

import ProductLinks from '../../shared/ProductLinks';
import classes from './Home.module.scss';

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
                <div className={classes['featured-products']}>
                    <div className={classes['product-1']}>1</div>
                    <div className={classes['product-2']}>2</div>
                    <div className={classes['product-3']}>3</div>
                    <div className={classes['product-4']}>4</div>
                </div>
            </div>
        </div>
    )
}

export default Home;