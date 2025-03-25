import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ImgDescript from '../components/ImgDescript';
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
        <Row>
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
            title={'Entrenamientos'} 
            txt={'Entrenamientos semanales con vista a competir los fines de semana.'}
            />
            <ImgDescript 
            img={Logo4} 
            title={'Entrenamientos'} 
            txt={'Entrenamientos semanales con vista a competir los fines de semana.'}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
