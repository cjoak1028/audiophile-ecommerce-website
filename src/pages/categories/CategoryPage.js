import React from 'react';

import CategoryLinks from '@components/CategoryLinks/CategoryLinks';
import About from '@components/About/About';

const CategoryPage = (props) => {
    return (
        <div className={`margin-top`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>{props.category}</h2>
            </div>
            <div className='padding-x content-wrapper content-wrapper--category'>
                <div>
                    {props.children}
                </div>
                <CategoryLinks />
                <About />
            </div>
        </div>
    );
}

export default CategoryPage;