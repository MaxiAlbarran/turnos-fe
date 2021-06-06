import React, { useState } from 'react';

const MASAJISTA_PRECIOS = {
  maxi: 300,
  german: 400,
  melina: 500,
};

const CreateAppointment = () => {
  const [price, setPrice] = useState(0);
  const handleSelectChange = (masajista) => {
    const masajistaPrecio = MASAJISTA_PRECIOS[masajista];

    setPrice(masajistaPrecio);
  };
  return (
    <div>
      <form>
        <div>
          <label>Ingrese su nombre</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Ingrese su apellido</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Fecha a elegir</label>
          <input type='date'></input>
        </div>
        <div>
          <label>Hora a elegir</label>
          <input type='text'></input>
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
    </div>
  );
};

export default CreateAppointment;
