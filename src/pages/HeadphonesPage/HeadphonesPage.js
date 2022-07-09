import React, { useEffect, useState } from 'react';

import classes from './HeadphonesPage.module.scss';

import Product from '../../components/Product';
import CategoryLinks from '../../components/CategoryLinks';
import About from '../../components/About';

import image from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';

const HeadphonesPage = () => {
    const [data, setData] = useState(null);

    const getData = () => {
        fetch('./data/products.json')
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const headphonesProductList = data ? data[0].products.map(product => {
        return (
            <Product imgSrc={image} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <div className={`${classes['headphones-page']}`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>Headphones</h2>
            </div>
            <div className='padding-x content-wrapper'>
                <div className={classes['headphones-page__products']}>
                    {headphonesProductList}
                </div>
                <CategoryLinks />
                <About />
            </div>
        </div>
    );
}

export default HeadphonesPage;