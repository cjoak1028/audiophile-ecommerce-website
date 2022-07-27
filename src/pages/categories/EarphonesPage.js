import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import CategoryPage from '@pages/categories/CategoryPage';
import Product from '@components/Product/Product';

const EarphonesPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const earphonesProductList = data ? data[2].products.map(product => {
        return (
            <Product key={product.model} new={product.new} images={product.images} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <CategoryPage category="earphones">
            {earphonesProductList}
        </CategoryPage>
    );
}

export default EarphonesPage;