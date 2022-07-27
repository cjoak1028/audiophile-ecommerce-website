import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import CategoryPage from '@pages/categories/CategoryPage';
import Product from '@components/Product/Product';

const HeadphonesPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const headphonesProductList = data ? data[0].products.map(product => {
        return (
            <Product key={product.model} new={product.new} images={product.images} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <CategoryPage category="headphones">
            {headphonesProductList}
        </CategoryPage>
    );
}

export default HeadphonesPage;