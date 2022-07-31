import React from 'react';

import CategoryLinks from '@components/CategoryLinks/CategoryLinks';
import About from '@components/About/About';

const ProductPage = (props) => {
    return (
        <div className='padding-x content-wrapper'>
            <div>
                {props.children}
            </div>
            <CategoryLinks />
            <About />
        </div>
    );
};

export default ProductPage;

