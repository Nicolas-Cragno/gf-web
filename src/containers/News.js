import React from 'react';
import '../assets/css/News.css';
import Cards from '../components/Cards';
import { Container, Row, Col } from 'react-bootstrap';
import ImgPrincipal from '../assets/statics/FeedBackground800px.svg';

export default function News() {
  return (
    <div className='news'>
        <Container>
          <Row>
            <Col xs={12} className='box'>
              <div  className='principal-new' style={{backgroundImage : 'url(' + ImgPrincipal + ') '}}>
                <h2 className='new-title'>Titulo principal</h2>
              </div>
              <div>
                <p className='new-txt'>Descripción de la última noticia.Descripción de la última noticia.Descripción de la última noticia.</p>
              </div>
            </Col>
            <Col md={4} className='box2'>
              <Cards 
              img={ImgPrincipal} 
              title="Titulo" 
              txt="Descripción de la última noticia.Descripción de la última noticia." 
              date="fecha"
              ></Cards>
            </Col>
            <Col md={4} className='box2'>
              <Cards 
              img={ImgPrincipal} 
              title="Titulo" 
              txt="Descripción de la última noticia.Descripción de la última noticia." 
              date="fecha"
              ></Cards>
            </Col>
            <Col md={4} className='box2'>
              <Cards 
              img={ImgPrincipal} 
              title="Titulo" 
              txt="Descripción de la última noticia.Descripción de la última noticia." 
              date="fecha"
              ></Cards>
            </Col>
            <Col md={4} className='box2'>
              <Cards 
              img={ImgPrincipal} 
              title="Titulo" 
              txt="Descripción de la última noticia.Descripción de la última noticia." 
              date="fecha"
              ></Cards>
            </Col>
            <Col md={4} className='box2'>
              <Cards 
              img={ImgPrincipal} 
              title="Titulo" 
              txt="Descripción de la última noticia.Descripción de la última noticia." 
              date="fecha"
              ></Cards>
            </Col>
            <Col md={4} className='box2'>
              <Cards 
              img={ImgPrincipal} 
              title="Titulo" 
              txt="Descripción de la última noticia.Descripción de la última noticia." 
              date="fecha"
              ></Cards>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
