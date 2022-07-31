import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import CategoryPage from '@pages/categories/CategoryPage';
import Product from '@components/Product/Product';

const EarphonesPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const earphonesList = data ? data[2].products.map(product => {
        return (
            <Product key={product.model} new={product.new} images={product.images} model={product.model} description={product.description} link={`/earphones/${product.model.replace(/\s/g, '-')}`} />
        )
    }) : '';

    return (
        <CategoryPage category="earphones">
            {earphonesList}
        </CategoryPage>
    );
}

export default EarphonesPage;