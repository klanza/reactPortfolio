import React from 'react';

import styles from './Banner.css';
import headerImg from '../../Assets/Header-min.jpg'

const Banner = () => (
    <div>
        <img src={headerImg} alt='Header background' className='styles.header-image' />
    </div>
)



export default Banner;