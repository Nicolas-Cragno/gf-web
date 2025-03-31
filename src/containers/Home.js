import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ImgDescript from '../components/ImgDescript';
import News from '../containers/News.js';
import ImgPredio from '../assets/statics/predio.jpg';
import ImgMap from '../assets/statics/map-color.svg';
import Calender from '../components/Calender';
import Logo from '../assets/statics/logo-principal.svg';
import Logo1 from '../assets/statics/LogoTrainning.png';
import Logo2 from '../assets/statics/LogoFutbol.png';
import Logo3 from '../assets/statics/LogoFutbol.png';
import Logo4 from '../assets/statics/LogoFutbol.png';
import Background from '../assets/statics/blackImg.svg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <Container>
        <Row className='first-section'>
          <Col md={6}>
            <img src={Logo} alt='' className='home-logo'></img>
              <h3 className='home-txt'>Profesionalizando el fútbol amateur.</h3>
              <Link to={'https://wa.me/5491138609659'} target='_blank'>
                <button className='home-btn'>Sumate a GF</button>
              </Link>
          </Col>
          <Col md={6}>
            <img src={Background} alt='' className='home-img'></img>
          </Col>
        </Row>
        <Row className='big-active'>
          <Col md={12} className='second-section'>
            <ImgDescript 
            img={Logo1} 
            title={'Entrenamientos'} 
            txt={'Entrenamientos semanales dónde buscamos dar el máximo en cada jornada.'}
            />
            <ImgDescript 
            img={Logo2} 
            title={'Competencia'} 
            txt={'Competencia en torneos todos los fines de semana.'}
            />
            <ImgDescript 
            img={Logo3} 
            title={'Seguimiento'} 
            txt={'Fotos, videos y noticias de cada fin de semana, junto con notas y comentarios de los protagonistas.'}
            />
            <ImgDescript 
            img={Logo4} 
            title={'Comunidad'} 
            txt={'También priorizamos el sentido de pertencia, fomentando reuniones para que cada plantel comparta y afianze relaciones.'}
            />
          </Col>
        </Row>
        <Row className='small-active'>
          <Col md={12} className='second-section'>
            <Row>
              <Col>
                <div className='logo-small'>
                <img src={Logo1} alt='' className='img-logo-small'></img>
                <img src={Logo2} alt='' className='img-logo-small'></img>
                <img src={Logo4} alt='' className='img-logo-small'></img>
                <img src={Logo3} alt='' className='img-logo-small'></img>
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='third-section'>
          <Col>
            <News></News>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
