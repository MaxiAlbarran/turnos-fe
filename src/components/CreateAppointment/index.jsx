import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MASAJISTA_PRECIOS = {
  maxi: 300,
  german: 400,
  melina: 500,
};

const CreateAppointment = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState(0);

  const handleOnClick = () => {
    console.log({ name, lastName, date, time, price });
  };

  const handleSelectChange = (masajista) => {
    const masajistaPrecio = MASAJISTA_PRECIOS[masajista];

    setPrice(masajistaPrecio);
  };

  return (
    <div>
      <form>
        <div>
          <label>Ingrese su nombre</label>
          <input type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label>Ingrese su apellido</label>
          <input
            type='text'
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Fecha a elegir</label>
          <input type='date' onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <div>
          <label>Hora a elegir</label>
          <input type='text' onChange={(e) => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Elija el masajista</label>
          <select onChange={(e) => handleSelectChange(e.target.value)}>
            <option value='maxi'>Maxi</option>
            <option value='german'>German</option>
            <option value='melina'>Melina</option>
          </select>
        </div>
        <div>
          <h6>Precio: {price}</h6>
        </div>
      </form>
      <div>
        <button type='button' onClick={handleOnClick}>
          Gracias
        </button>
      </div>
      <div>
        <h4>
          <Link to='/Turnos'>Turnos solicitados</Link>
        </h4>
      </div>
    </div>
  );
};

export default CreateAppointment;
