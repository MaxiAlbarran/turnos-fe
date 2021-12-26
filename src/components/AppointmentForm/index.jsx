import React from 'react';
import './index.css';

function AppointmentForm(props) {
  const { handleSubmit, handleChange, form, errors, massageData, choice } =
    props;

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-register'>
        <h4 className='title-massage'>
          Solicitar turno para {massageData.title}
        </h4>
        <hr />
        <div>
          <label className='label'>Nombre</label>
          <input
            className='controls'
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && (
          <div className='container-error'>
            <p className='error'>{errors.message}</p>
          </div>
        )}
        <div>
          <label className='label'>Apellido</label>
          <input
            className='controls'
            type='text'
            name='surname'
            value={form.surname}
            onChange={handleChange}
          />
        </div>
        {errors.surname && (
          <div className='container-error'>
            <p className='error'>{errors.message}</p>
          </div>
        )}
        <div>
          <label className='label'>Fecha</label>
          <input
            className='date-time'
            type='date'
            name='date'
            value={form.date}
            onChange={handleChange}
          />
        </div>
        {errors.date && (
          <div className='container-error'>
            <p className='error'>{errors.message}</p>
          </div>
        )}
        <div>
          <label className='label'>Horario</label>
          <input
            className='date-time'
            type='time'
            name='hour'
            value={form.hour}
            onChange={handleChange}
          />
        </div>
        {errors.hour && (
          <div className='container-error'>
            <p className='error'>{errors.message}</p>
          </div>
        )}
        {massageData.options && (
          <div>
            <label className='label'>Tipo de masaje</label>
            <div className='select'>
              <select onChange={(e) => choice(e.target.value)}>
                <option selected disabled>
                  Elija una opcion
                </option>
                <option value='superior'>Espalda, brazos, manos, cuello</option>
                <option value='inferior'>
                  Isquiotibiales, cuadriceps, gemelos
                </option>
              </select>
            </div>
          </div>
        )}
        <button className='button-form' type='submit'>
          CREAR TURNO
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
