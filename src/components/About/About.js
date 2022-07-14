import React from 'react';

import classes from './About.module.scss';

const About = () => {
    return (
        <div className={classes['about']}>
            <div className={classes['about__img']}></div>
            <div className={classes['about__text']}>
                <h4>Bringing you the <span>best</span> audio gear</h4>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    );
}

export default About;