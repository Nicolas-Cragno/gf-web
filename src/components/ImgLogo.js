import React from 'react';
import '../assets/css/Img.css';
import { Link } from 'react-router-dom';

export default function ImgLogo(props) {
    const {img, link, target} = props;
  return (
    <>
    <Link to={link} target={target}>
      <img src={img} alt='' className='img-logo'></img>
    </Link>
    </>
  )
}