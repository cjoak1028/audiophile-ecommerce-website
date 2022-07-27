import React from 'react';
import useFetchLocalData from '@hooks/useFetchLocalData.js';

import CategoryPage from '@pages/categories/CategoryPage';
import Product from '@components/Product/Product';

const SpeakersPage = () => {
    const { data } = useFetchLocalData('./data/products.json');

    const speakersList = data ? data[1].products.map(product => {
        return (
            <Product key={product.model} new={product.new} images={product.images} model={product.model} description={product.description} />
        )
    }) : '';

    return (
        <CategoryPage category="speakers">
            {speakersList}
        </CategoryPage>
    );
}

export default SpeakersPage;