import React from 'react';

const Appointment = ({ appointment }) => {
  let { name, surname, date, hour, masseuse, price } = appointment;

  return (
    <div>
      <p>
        <b>Turno del paciente:</b>
      </p>
      <div>
        <label>Nombre: {name}</label>
      </div>
      <div>
        <label>Apellido: {surname}</label>
      </div>
      <div>
        <label>Fecha: {date}</label>
      </div>
      <div>
        <label>Horario: {hour}</label>
      </div>
      <div>
        <label>Masajista: {masseuse}</label>
      </div>
      <div>
        <label>Precio final: {price}</label>
      </div>
    </div>
  );
};

export default Appointment;
