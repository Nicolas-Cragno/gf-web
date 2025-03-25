import React from 'react';
import '../assets/css/Calender.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Calender() {
  return (
    <div className='calender'>
        <h1>Horarios</h1>
        <h2 className='txt-red'>ENTRENAMIENTOS</h2>
        <div className='calender-box'>
            <h3 className='txt-title'>MASCULINO</h3>
            <h3 className='txt-txt'>Martes: 21:00 hs a 22:30hs</h3>
            <h3 className='txt-txt'>Miércoles: 22:00 a 23:00hs</h3>
            <h3 className='txt-txt'>Jueves: 21:30hs a 23:00hs</h3>
        </div>
        <div className='calender-box'>
            <h3 className='txt-title'>FEMENINO</h3>
            <h3 className='txt-txt'>Jueves: 21:00hs a 22:00hs</h3>
        </div>
    </div>
  )
}
