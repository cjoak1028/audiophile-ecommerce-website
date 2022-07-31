import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import CategoryPage from '@pages/categories/CategoryPage';
import Product from '@components/Product/Product';

const HeadphonesPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const headphonesList = data ? data[0].products.map(product => {
        return (
            <Product key={product.model} new={product.new} images={product.images} model={product.model} description={product.description} link={`/headphones/${product.model.replace(/\s/g, '-')}`} />
        )
    }) : '';

    return (
        <CategoryPage category="headphones">
            {headphonesList}
        </CategoryPage>
    );
}

export default HeadphonesPage;