import React from 'react';
import "../assets/css/Cards.css";
import { Card } from 'react-bootstrap';

export default function Cards(props) {
    const { img, title, txt, date} = props;
  return (
    <>
        <Card className='cards'>
            <Card.Img variant="top" src={img} />
            <Card.Footer className='cards-body'>
            <small className='txts'>
              <h3 className='card-title'>{title}</h3>
              <h5 className='card-txt'>{txt}</h5>
            </small>
            </Card.Footer>
            {/*
            <Card.Title className='card-navbar'>
              <button className='card-btn'>ver noticia</button>  
            </Card.Title> 
            <Card.Body>
            <Card.Text>{txt}</Card.Text>
            </Card.Body>
            */}
        </Card>
    </>
  )
}
