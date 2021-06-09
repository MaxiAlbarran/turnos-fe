import React from 'react';
import Appointment from './Appointment';
import {Link} from 'react-router-dom'

const PATIENT = [
  {
    name: 'Lionel',
    surname: 'Messi',
    date: '18/06/2021',
    hour: '10:00 AM',
    masseuse: 'German',
    price: 400,
  },
];

const Data = () => {
  return (
    <div>
      <div>
      {PATIENT.map((data) => (
        <div>
          <Appointment datos={data} />
        </div>
      ))}
    </div>
    <div>
      <h4>
        <Link to="/">
          Volver al inicio
        </Link>
      </h4>
    </div>
    </div>
  );
};

export default Data;
