import React from 'react';
import { Link } from "react-router-dom";

import classes from './Product.module.scss';

import * as categoryImages from '@assets/categoryImages.js';

const Product = (props) => {
    let imgMobile, imgTablet, imgDesktop;

    console.log(props.link);

    if (props.model === "xx99 mark ii headphones") {
        imgMobile = categoryImages.xx99MarkTwoImgMobile;
        imgTablet = categoryImages.xx99MarkTwoImgTablet;
        imgDesktop = categoryImages.xx99MarkTwoImgDesktop;
    } else if (props.model === "xx99 mark i headphones") {
        imgMobile = categoryImages.xx99MarkOneImgMobile;
        imgTablet = categoryImages.xx99MarkOneImgTablet;
        imgDesktop = categoryImages.xx99MarkOneImgDesktop;
    } else if (props.model === "xx59 headphones") {
        imgMobile = categoryImages.xx59ImgMobile;
        imgTablet = categoryImages.xx59ImgTablet;
        imgDesktop = categoryImages.xx59ImgDesktop;
    } else if (props.model === "zx9 speaker") {
        imgMobile = categoryImages.zx9ImgMobile;
        imgTablet = categoryImages.zx9ImgTablet;
        imgDesktop = categoryImages.zx9ImgDesktop;
    } else if (props.model === "zx7 speaker") {
        imgMobile = categoryImages.zx7ImgMobile;
        imgTablet = categoryImages.zx7ImgTablet;
        imgDesktop = categoryImages.zx7ImgDesktop;
    } else if (props.model === "yx1 wireless earphones") {
        imgMobile = categoryImages.yx1ImgMobile;
        imgTablet = categoryImages.yx1ImgTablet;
        imgDesktop = categoryImages.yx1ImgDesktop;
    }

    return (
        <div className={classes['product']}>
            <picture className={classes['product__img-container']}>
                <source media="(min-width: 53.75em)" srcSet={imgDesktop} />
                <source media="(min-width: 30em)" srcSet={imgTablet} />
                <img src={imgMobile} alt={`${props.model} preview`} />
            </picture>
            <div className={classes['product__text']}>
                {props.new ? <h6 className={classes['product__new']}>New Product</h6> : ''}
                <h2 className={classes['product__model']}>{props.model}</h2>
                <p className={classes['product__description']}>{props.description}</p>
                <Link to={props.link} className={'btn btn--orange'}>See Product</Link>
            </div>
        </div>
    );
};

export default Product;