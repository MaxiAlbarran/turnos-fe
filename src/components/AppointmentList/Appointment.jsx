import React, { useState } from 'react';

const Appointment = (props) => {
  return (
    <div>
      <p>
        <b>Turno del paciente</b>
      </p>
      <div>
        <label>Nombre: {props.datos.name}</label>
      </div>
      <div>
        <label>Apellido: {props.datos.surname}</label>
      </div>
      <div>
        <label>Fecha: {props.datos.date}</label>
      </div>
      <div>
        <label>Horario: {props.datos.hour}</label>
      </div>
      <div>
        <label>Masajista: {props.datos.masseuse}</label>
      </div>
      <div>
        <label>Precio final: {props.datos.price}</label>
      </div>
    </div>
  );
};

export default Appointment;
