import React from 'react';

import classes from './ProductLinks.module.scss';

import arrow from '../../assets/shared/desktop/icon-arrow-right.svg';
import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const ProductLinks = () => {
    return (
        <div className={classes["product-links"]}>
            <div className={classes["product-links__item"]}>
                <img className={classes.thumbnail} src={headphones} alt="headphones thumbnail" />
                <div className={classes.container}>
                    <h6>Headphones</h6>
                    <a>Shop <img src={arrow} alt="right arrow" /></a>
                </div>
            </div>
            <div className={classes["product-links__item"]}>
                <img className={classes.thumbnail} src={speakers} alt="speakers thumbnail" />
                <div className={classes.container}>
                    <h6>Speakers</h6>
                    <a>Shop <img src={arrow} alt="right arrow" /></a>
                </div>
            </div>
            <div className={classes["product-links__item"]}>
                <img className={classes.thumbnail} src={earphones} alt="speakers thumbnail" />
                <div className={classes.container}>
                    <h6>Earphones</h6>
                    <a>Shop <img src={arrow} alt="right arrow" /></a>
                </div>
            </div>
        </div>
    );
};

export default ProductLinks;