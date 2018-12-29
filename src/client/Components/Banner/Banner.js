import React from 'react';

import headerImg from '../../Assets/Header-min.jpg'
import styles from './Banner.scss';

const Banner = () => (
    <div className={'root'}>
        <img src={headerImg} alt='Header background' className='headerImage'/>
    </div>
)



export default Banner;