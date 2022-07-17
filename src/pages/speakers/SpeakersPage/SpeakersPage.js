import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import classes from './SpeakersPage.module.scss';

import Product from '@components/Product/Product';
import CategoryLinks from '@components/CategoryLinks/CategoryLinks';
import About from '@components/About/About';

import image from '@assets/product-zx9-speaker/desktop/image-product.jpg';

const SpeakersPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const speakersProductList = data ? data[1].products.map(product => {
        return (
            <Product new={product.new} imgSrc={image} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <div className={`margin-top ${classes['speakers-page']}`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>Speakers</h2>
            </div>
            <div className='padding-x content-wrapper'>
                <div className={classes['speakers-page__products']}>
                    {speakersProductList}
                </div>
                <CategoryLinks />
                <About />
            </div>
        </div>
    );
}

export default SpeakersPage;