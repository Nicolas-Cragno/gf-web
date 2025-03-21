import React from 'react';
import '../assets/css/LongBar.css';
import ItemBar from './ItemBar';
import LogoTraining from '../assets/statics/LogoTrainning.png';
import LogoFutbol from '../assets/statics/LogoFutbol.png';

export default function LongBar() {
  return (
    <div className='long-bar'> {/* el "item-bar" define los estilos generales */}
      <ItemBar
      img={LogoTraining}
      title={'ENTRENÁ'}
      className={'item-bar item-bar-1'}  
      ></ItemBar>
      <ItemBar
      img={LogoFutbol}
      title={'MASCULINO'}
      className={'item-bar item-bar-2'} 
      ></ItemBar>
      <ItemBar
      img={LogoFutbol}
      title={'FEMENINO'}
      className={'item-bar item-bar-3'}
      ></ItemBar>
      <ItemBar
      img={LogoFutbol}
      title={'VESTÍ GF'}
      className={'item-bar item-bar-4'}
      ></ItemBar>
    </div>
  )
}