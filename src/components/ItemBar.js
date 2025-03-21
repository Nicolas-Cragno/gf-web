import React from 'react';

import ImgLogo from './ImgLogo.js';
import { Link } from 'react-router-dom';    

export default function ItemBar(props) {
    const {link, img, title, target, className} = props;
  return (
    <div className={className} >
      <Link to={link} target={target} className='item-bar-link'>
        <ImgLogo
        img={img}
        ></ImgLogo>
        <h5 className='item-bar-title txt'>{title}</h5>
      </Link>
    </div>
  )
}