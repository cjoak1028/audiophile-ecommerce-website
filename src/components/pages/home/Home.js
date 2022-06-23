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
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    )
}

export default Home;