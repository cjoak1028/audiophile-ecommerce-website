import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import classes from './EarphonesPage.module.scss';

import Product from '@components/Product/Product';
import CategoryLinks from '@components/CategoryLinks/CategoryLinks';
import About from '@components/About/About';

const EarphonesPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const earphonesProductList = data ? data[2].products.map(product => {
        return (
            <Product new={product.new} images={product.images} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <div className={`margin-top ${classes['earphones-page']}`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>Earphones</h2>
            </div>
            <div className='padding-x content-wrapper'>
                <div className={classes['earphones__products']}>
                    {earphonesProductList}
                </div>
                <CategoryLinks />
                <About />
            </div>
        </div>
    );
}

export default EarphonesPage;