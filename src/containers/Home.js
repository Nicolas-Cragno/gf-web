import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImgDescript from '../components/ImgDescript';
import News from '../containers/News.js';
import ImgMap from '../assets/statics/map-color.svg';
import Logo from '../assets/statics/logo-principal.svg';
import Logo1 from '../assets/statics/LogoTrainning.svg';
import Logo2 from '../assets/statics/LogoCup.svg';
import Logo3 from '../assets/statics/LogoFilm.svg';
import Logo4 from '../assets/statics/LogoCommunity.svg';
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
            title={'Prácticas'} 
            txt={'Semanales'}
            />
            <ImgDescript 
            img={Logo2} 
            title={'Competencia'} 
            txt={'Cada fin de semana'}
            />
            <ImgDescript 
            img={Logo3} 
            title={'Seguimiento'} 
            txt={'Fotos, videos y más'}
            />
            <ImgDescript 
            img={Logo4} 
            title={'Comunidad'} 
            txt={'Sé parte de GF predio'}
            />
          </Col>
        </Row>
        <Row className='small-active'>
          <Col md={12} className='second-section'>
            <Row>
              <Col>
                <div className='logo-small'>
                  <div className='logo-small-item'>
                    <img src={Logo1} alt='' className='img-logo-small'></img>
                    <p className='txt-logo-small'>Prácticas</p>
                  </div>
                  <div className='logo-small-item'>
                    <img src={Logo2} alt='' className='img-logo-small'></img>
                    <p className='txt-logo-small'>Competencia</p>
                  </div>
                </div>
                <div className='logo-small'>
                  <div className='logo-small-item'>
                    <img src={Logo3} alt='' className='img-logo-small'></img>
                    <p className='txt-logo-small'>Seguimiento</p>
                  </div>
                  <div className='logo-small-item'>
                    <img src={Logo4} alt='' className='img-logo-small'></img>
                    <p className='txt-logo-small'>Comunidad</p>
                  </div>
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
        <Row className='fourth-section'>
          <Row>
            <Col>
              <h1 className='fourth-title'>HORARIOS</h1>
              <div className='red-center'>
                <h5 className='fourth-subtitle'>ENTRENAMIENTOS</h5>
              </div>
              <div className='div-one'>
              <div className='hs'>
                <h5 className='fourth-h5'>Masculino</h5>
                <p className='fourth-p'>Martes 21:00 a 22:30 hs</p>
                <p className='fourth-p'>Miércoles 22:00 a 23:00 hs</p>
                <p className='fourth-p'>Jueves 21:30 a 23:00 hs</p>
              </div>
              <Link to={'https://www.google.com/maps/place/Instituto+Cultural+Y+Deportivo+Luz+Y+Fuerza/@-34.6256086,-58.4951751,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc9c6b75826ed:0x709bd790c0f08727!8m2!3d-34.625613!4d-58.4926002!16s%2Fg%2F11c7hb40t3!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'} target='_blank' className='link-txt '>
                <div className='hs-box'>
                  <Row>
                    <Col md={2} className='box-left'>
                      <img src={ImgMap} alt='' className='img-small'></img>
                    </Col>
                    <Col md={10} className='box-right'>
                      <h6 className='link-txt-big'>Instituto Cultural y Deportivo Luz y Fuerza</h6>
                      <h6 className='link-txt-small'>Predio Floresta</h6>
                    </Col>
                  </Row>
                </div>
              </Link>
              </div>
              <div className='div-two'>
                  <div className='hs'>
                    <h5 className='fourth-h5'>Femenino</h5>
                    <p className='fourth-p'>Jueves 21:00 a 23:00 hs</p>
                  </div>
                  <Link to={'https://www.google.com/maps/place/Instituto+Cultural+Y+Deportivo+Luz+Y+Fuerza/@-34.6256086,-58.4951751,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc9c6b75826ed:0x709bd790c0f08727!8m2!3d-34.625613!4d-58.4926002!16s%2Fg%2F11c7hb40t3!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'} target='_blank' className='link-txt '>
                    <div className='hs-box'>
                      <Row>
                        <Col md={2} className='box-left'>
                          <img src={ImgMap} alt='' className='img-small'></img>
                        </Col>
                        <Col md={10} className='box-right'>
                          <h6 className='link-txt-big'>El Predio Caballito</h6>
                          <h6 className='link-txt-small'>Predio Caballito</h6>
                        </Col>
                      </Row>
                    </div>
                  </Link>

              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}
