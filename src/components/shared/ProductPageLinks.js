import React from 'react';

import classes from './ProductPageLinks.module.scss';

import arrowImg from '../../assets/shared/desktop/icon-arrow-right.svg';
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const ProductPageLinks = () => {
    return (
        <div className={classes["prod-page-links"]}>
            <div className={classes["prod-page-links__card"]}>
                <img className={classes["prod-page-links__thumbnail"]} src={headphonesImg} alt="headphones thumbnail" />
                <h6 className={classes["prod-page-links__title"]}>Headphones</h6>
                <a className={classes["prod-page-links__link"]}>Shop <img src={arrowImg} alt="right arrow" /></a>
            </div>
            <div className={classes["prod-page-links__card"]}>
                <img className={classes["prod-page-links__thumbnail"]} src={speakersImg} alt="speakers thumbnail" />
                <h6 className={classes["prod-page-links__title"]}>Speakers</h6>
                <a className={classes["prod-page-links__link"]}>Shop <img src={arrowImg} alt="right arrow" /></a>
            </div>
            <div className={classes["prod-page-links__card"]}>
                <img className={classes["prod-page-links__thumbnail"]} src={earphonesImg} alt="speakers thumbnail" />
                <h6 className={classes["prod-page-links__title"]}>Earphones</h6>
                <a className={classes["prod-page-links__link"]}>Shop <img src={arrowImg} alt="right arrow" /></a>
            </div>
        </div>
    );
};

export default ProductPageLinks;