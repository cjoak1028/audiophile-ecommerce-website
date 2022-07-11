import React from 'react';

import classes from './CategoryLinks.module.scss';

import CategoryLinkCard from './CategoryLinkCard';

import headphonesImg from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

const CategoryLinks = () => {
    return (
        <div className={classes["category-links"]}>
            <CategoryLinkCard link="/headphones" image={headphonesImg} title="Headphones" />
            <CategoryLinkCard link="/speakers" image={speakersImg} title="Speakers" />
            <CategoryLinkCard link="/earphones" image={earphonesImg} title="Earphones" />
        </div>
    );
};

export default CategoryLinks;