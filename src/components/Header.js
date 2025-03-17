import React from 'react';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/statics/logo-principal.svg';
import Insta from '../assets/statics/insta-3.svg';
import Youtube from '../assets/statics/youtube-3.svg';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <div className='header'>
        <Container>
            <Row>
                <Col md={6}>
                    <ul className='navbar'>
                        <Link to={'/'} className='link'>
                            <li className='navitem'><img src={Logo} alt='' className='linklogo'></img></li>
                        </Link>
                        <Link to={'/noticias'} className='link'>
                             <li className='navitem'>NOTICIAS</li>
                        </Link>
                        <Link to={'/predio'} className='link'>
                            <li className='navitem'>PREDIO</li>
                        </Link>
                        <Link to={'/indumentaria'} className='link'>
                            <li className='navitem'>INDUMENTARIA</li>
                        </Link>
                      </ul>
                </Col>
                <Col md={6}>
                    <ul className='sites'>
                        <Link to={'/'} className='link'>
                            <li className='navitem'><img src={Insta} alt='' className='sitelogo'></img></li>
                        </Link>
                        <Link to={'/'} className='link'>
                            <li className='navitem'><img src={Youtube} alt='' className='sitelogo'></img></li>
                        </Link>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
