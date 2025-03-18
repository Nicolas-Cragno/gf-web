import React from 'react';
import "../assets/css/News.css";
import { Card } from 'react-bootstrap';

export default function Cards(props) {
    const { img, title, txt, date} = props;
  return (
    <>
        <Card className='cards'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            </Card.Body>
            {/*
            <Card.Footer>
            <Card.Text>{txt}</Card.Text>
            <small className="text-muted">{date}</small>
            </Card.Footer>
            */}
        </Card>
    </>
  )
}
