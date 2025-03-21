import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/statics/logo-principal.svg';
import LongBar from '../components/LongBar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <Container>
        <Row className='first-section'>
          <Col md={12}>
            <img src={Logo} alt='' className='home-logo'></img>
              <h3 className='home-txt'>Profesionalizando el fútbol amateur.</h3>
              <Link to={'https://wa.me/5491138609659'} target='_blank'> {/* Link a telefono de pablo fidani */}
                <button className='home-btn'>Sumate a GF</button>
              </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='second-section'>
            <LongBar></LongBar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
