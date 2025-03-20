import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/statics/logo-principal.svg';

export default function Home() {
  return (
    <div className='home'>
      <Container>
        <Row>
          <Col md={12}>
            <img src={Logo} alt='' className='home-logo'></img>
              <h3 className='home-txt'>Profesionalizando el fútbol amateur.</h3>
              <button className='home-btn'>Sumate a GF</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
