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
            <small>{title}</small>
            </Card.Footer>
            {/*
            <Card.Title>{title}</Card.Title>
            <Card.Body>
            <Card.Text>{txt}</Card.Text>
            </Card.Body>
            */}
        </Card>
    </>
  )
}
