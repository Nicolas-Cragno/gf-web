import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ImgDescript from '../components/ImgDescript';
import ImgPredio from '../assets/statics/predio.jpg';
import ImgMap from '../assets/statics/map-color.svg';
import Calender from '../components/Calender';
import Logo from '../assets/statics/logo-principal.svg';
import Logo1 from '../assets/statics/LogoTrainning.png';
import Logo2 from '../assets/statics/LogoFutbol.png';
import Logo3 from '../assets/statics/LogoFutbol.png';
import Logo4 from '../assets/statics/LogoFutbol.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <Container>
        <Row className='first-section'>
          <Col md={12}>
            <img src={Logo} alt='' className='home-logo'></img>
              <h3 className='home-txt'>Profesionalizando el fútbol amateur.</h3>
              <Link to={'https://wa.me/5491138609659'} target='_blank'>
                <button className='home-btn'>Sumate a GF</button>
              </Link>
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
                <img src={Logo1} alt='' className='img-logo'></img>
                <h6>Entramientos</h6>
                </div>
                <div className='logo-small'>
                <img src={Logo2} alt='' className='img-logo'></img>
                <h6>Competencia</h6>
                </div>
              </Col>
              <Col>
              <div className='logo-small'>
                <img src={Logo3} alt='' className='img-logo'></img>
                <h6>Segumiento</h6>
                </div>
                <div className='logo-small'>
                <img src={Logo4} alt='' className='img-logo'></img>
                <h6>Comunidad</h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='third-section'>
          <Container>
            <Row>
              <Col md={6}>
                <Calender></Calender>
              </Col>
              <Col md={6}>
                <img src={ImgPredio} className='long-img' alt=''></img>
                <div className='img-txt-info'>
                  <img src={ImgMap} className='small-img' alt=''></img>
                  <div className='small-txt-box'>
                    <h3 className='small-txt'>El predio - Galicia 1973, CABA.</h3>
                  </div>
                </div> 
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  )
}
