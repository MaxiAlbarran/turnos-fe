import React, { useState } from 'react';
import Appointment from './Appointment';
import { Link } from 'react-router-dom';

const PATIENTS = [
  {
    id: 1,
    name: 'Lionel',
    surname: 'Messi',
    date: '18/06/2021',
    hour: '10:00 AM',
    masseuse: 'German',
    price: 600,
  },
  {
    id: 2,
    name: 'Cristiano',
    surname: 'Ronaldo',
    date: '18/06/2021',
    hour: '10:00 AM',
    masseuse: 'German',
    price: 400,
  },
  {
    id: 10,
    name: 'Juan Roman',
    surname: 'Riquelme',
    date: '18/06/2021',
    hour: '10:00 AM',
    masseuse: 'German',
    price: 1000,
  },
];

const AppointmentList = () => {
  const [patients] = useState(PATIENTS);

  return (
    <div>
      <div>
        {patients.map((patient) => (
          <div>
            <Appointment appointment={patient} />
          </div>
        ))}
      </div>
      <div>
        <h4>
          <Link to='/'>Volver al inicio</Link>
        </h4>
      </div>
    </div>
  );
};

export default AppointmentList;
