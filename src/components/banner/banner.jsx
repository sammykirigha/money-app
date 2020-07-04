import React from 'react';
import './banner.styles.scss'

const Banner = ({title, subtitle, children}) => (
    <div className='banner'>
        <h2>{title}</h2>
        <div></div>
        <p>{subtitle}</p>
        {children}
    </div>
)

export default Banner