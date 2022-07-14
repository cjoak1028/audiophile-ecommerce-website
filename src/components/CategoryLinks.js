import React from 'react';

import classes from './CategoryLinks.module.scss';

import CategoryLinkCard from './CategoryLinkCard';

const CategoryLinks = () => {
    return (
        <div className={classes["category-links"]}>
            <CategoryLinkCard link="/headphones" image={require('@assets/shared/desktop/image-category-thumbnail-headphones.png')} title="Headphones" />
            <CategoryLinkCard link="/speakers" image={require('@assets/shared/desktop/image-category-thumbnail-speakers.png')} title="Speakers" />
            <CategoryLinkCard link="/earphones" image={require('@assets/shared/desktop/image-category-thumbnail-earphones.png')} title="Earphones" />
        </div>
    );
};

export default CategoryLinks;