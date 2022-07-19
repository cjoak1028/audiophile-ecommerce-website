import React from 'react';

import classes from './Product.module.scss';

import * as categoryImages from '@assets/categoryImages.js';

const Product = (props) => {
    return (
        <div className={classes['product']}>
            {/* <img className={classes['product__img']} src={props.imgSrc} alt={`${props.model} preview`} /> */}
            <img className={classes['product__img']} src={categoryImages.xx59ImgMobile} alt={`${props.model} preview`} />
            <div className={classes['product__text']}>
                {props.new ? <h6 className={classes['product__new']}>New Product</h6> : ''}
                <h2 className={classes['product__model']}>{props.model}</h2>
                <p className={classes['product__description']}>{props.description}</p>
                <a className={'btn btn--orange'}>See Product</a>
            </div>
        </div>
    );
};

export default Product;