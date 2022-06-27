import React from 'react';

import classes from './CategoryLinks.module.scss';

import arrowImg from '../../assets/shared/desktop/icon-arrow-right.svg';
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

const CategoryLinks = () => {
    return (
        <div className={classes["category-links"]}>
            <div className={classes["category-links__card"]}>
                <img className={classes["category-links__thumbnail"]} src={headphonesImg} alt="headphones thumbnail" />
                <h6 className={classes["category-links__title"]}>Headphones</h6>
                <a className={classes["category-links__link"]}>Shop <img src={arrowImg} alt="right arrow" /></a>
            </div>
            <div className={classes["category-links__card"]}>
                <img className={classes["category-links__thumbnail"]} src={speakersImg} alt="speakers thumbnail" />
                <h6 className={classes["category-links__title"]}>Speakers</h6>
                <a className={classes["category-links__link"]}>Shop <img src={arrowImg} alt="right arrow" /></a>
            </div>
            <div className={classes["category-links__card"]}>
                <img className={classes["category-links__thumbnail"]} src={earphonesImg} alt="speakers thumbnail" />
                <h6 className={classes["category-links__title"]}>Earphones</h6>
                <a className={classes["category-links__link"]}>Shop <img src={arrowImg} alt="right arrow" /></a>
            </div>
        </div>
    );
};

export default CategoryLinks;