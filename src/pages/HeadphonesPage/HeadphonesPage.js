import React, { useEffect, useState } from 'react';

import classes from './HeadphonesPage.module.scss';

import CategoryLinks from '../../components/CategoryLinks';
import About from '../../components/About';

const HeadphonesPage = () => {
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
    }, [])

    return (
        <div className={`${classes['headphones-page']}`}>
            <div className='flex flex-jc-c flex-ai-c banner banner--category'>
                <h2>Headphones</h2>
            </div>
            <div className='padding-x content-wrapper'>
                <CategoryLinks />
                <About />
            </div>
        </div>
    );
}

export default HeadphonesPage;