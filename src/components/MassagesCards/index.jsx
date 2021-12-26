import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css'



function MassagesCards({ massage }) {
  return (
    <Card className='card'>
      <Card.Header className='header'>
        <div ><h1 className='header-title'><u>{massage.title}</u></h1></div>
        <div className='card-subtitle mb-1 '>
          <b>{massage.duration} minutos</b>
        </div>
      </Card.Header>

      <div className='card-body'>
        <div className='card-text'>{massage.description}</div>
        
      </div>

      <Card.Footer className="footer">
        <div className='card-footer-text '><b>${massage.price}</b></div>
        <Link to={`/createappointment/${massage.id}`}>
          <button className="button">
            Solicitar turno
          </button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default MassagesCards;
