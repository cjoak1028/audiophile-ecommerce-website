import React, { useEffect, useState } from 'react';

import classes from './SpeakersPage.module.scss';

import Product from '../../components/Product';
import CategoryLinks from '../../components/CategoryLinks';
import About from '../../components/About';

import image from '../../assets/shared/desktop/image-zx9-speaker.jpg';

const SpeakersPage = () => {
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