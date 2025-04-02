import React from 'react';
import Insta from '../assets/statics/insta-3.svg';
import Youtube from '../assets/statics/youtube-3.svg';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
         <ul className='sites'>
            <Link to={'https://www.instagram.com/gfpredio/'} className='link' target='_blank'>
                <li className='navitem'><img src={Insta} alt='' className='sitelogo'></img></li>
            </Link>
            <Link to={'https://www.youtube.com/@GFPredio'} className='link' target='_blank'>
                <li className='navitem'><img src={Youtube} alt='' className='sitelogo'></img></li>
            </Link>
        </ul>
    </div>
  )
}
