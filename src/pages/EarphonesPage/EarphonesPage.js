import React, { useEffect, useState } from 'react';

import classes from './EarphonesPage.module.scss';

import Product from '../../components/Product';
import CategoryLinks from '../../components/CategoryLinks';
import About from '../../components/About';

import image from '../../assets/product-yx1-earphones/desktop/image-product.jpg';

const EarphonesPage = () => {
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

    const earphonesProductList = data ? data[2].products.map(product => {
        return (
            <Product new={product.new} imgSrc={image} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <div className={`margin-top ${classes['earphones-page']}`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>Speakers</h2>
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