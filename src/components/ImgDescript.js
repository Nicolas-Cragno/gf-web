import React from 'react';
import '../assets/css/ImgDescript.css';

export default function ImgDescript(props) {
    const {img, title, txt} = props;
  return (
    <div className='img-descript'>
        <div className='img-descript-top'>
            <img src={img} alt='' className='img-descript-logo'></img>
        </div>
        <div className='img-descript-under'>
            <h3 className='img-descript-title'>{title}</h3>
            <p className='img-descript-txt'>{txt}</p>
        </div>
    </div>
  )
}
