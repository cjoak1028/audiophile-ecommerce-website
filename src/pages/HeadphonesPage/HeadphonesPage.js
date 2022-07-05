import React from 'react';

import classes from './HeadphonesPage.module.scss';

const HeadphonesPage = () => {
    return (
        <div className={`${classes['headphones-page']}`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>Headphones</h2>
            </div>
        </div>
    );
}

export default HeadphonesPage;