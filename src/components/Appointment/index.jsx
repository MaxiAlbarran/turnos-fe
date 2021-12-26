import React, { useState, useEffect } from 'react';
import './index.css';

const Appointment = ({ appointment }) => {
  let { name, surname, date, hour, option, price } = appointment;
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (!name.trim() || !surname.trim() || !date.trim() || !hour.trim()) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [appointment]);

  if (valid) {
    return (
      <div className='card-appoint'>
        <div className='header-appoint'>
          <h4 className='title-appoint'>Turno creado</h4>
        </div>
        <div className='body-appoint'>
          <div className='div-body'>
            <div className='body-label'>Nombre completo</div>
            <div className='body-info'> {name} {surname}</div>
          </div>
          <hr />
          <div className='div-body'>
          <div className='body-label'>Fecha</div>
            <div className='body-info'> {JSON.stringify(date)}</div>
          </div>
          <hr />
          <div className='div-body'>
          <div className='body-label'>Horario</div>
            <div className='body-info'> {hour}</div>
          </div>
          <hr />
        {price !== 1000 && (
          <div className='div-body'>
            <div className='body-label'>Opcion elegida</div>
            <div className='body-info'>{option}</div>
            <hr />
          </div>
          
        )}
          <div className='div-body'>
          <div className='body-label'>Precio</div>
            <div className='body-info'> ${price}</div>
          </div>
          <div className="button-appoint">
            <button type="button" className="confirm-button" onClick={()=>console.log(appointment)}>Confirmar turno</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container-message-error'>
        <div className='message-error'>Verifique correctamente los campos</div>
      </div>
    );
  }
};

export default Appointment;
