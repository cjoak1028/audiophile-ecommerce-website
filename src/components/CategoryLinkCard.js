import React from 'react';
import { Link } from "react-router-dom";

import classes from './CategoryLinkCard.module.scss';

import arrowImg from '@assets/shared/desktop/icon-arrow-right.svg';

const CategoryLinkCard = (props) => {
    return (
        <div className={classes["category-card"]}>
            <img className={classes["category-card__thumbnail"]} src={props.image} alt="thumbnail" />
            <h6 className={classes["category-card__title"]}>{props.title}</h6>
            <Link className={classes["category-card__link"]} to={props.link}>Shop <img src={arrowImg} alt="right arrow" /></Link>
        </div>
    );
};

export default CategoryLinkCard;