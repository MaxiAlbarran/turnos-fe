import React, { useState } from 'react';
import Appointment from '../components/Appointment';
import AppointmentForm from '../components/AppointmentForm';
import { useForm } from '../hooks/useForm';
import { useGetMassage } from '../hooks/useGetMassage';
import { useValidations } from '../hooks/useValidations';
import massage from '../assets/massage.png'

const appointmentForm = {
  name: '',
  surname: '',
  date: '',
  hour: '',
};//Esqueleto de los datos del paciente


const options = {
  superior: 'Espalda, brazos, manos, cuello',
  inferior: 'Isquiotibiales, cuadriceps, gemelos',
};//Actua en el handleSelectChange


const layout = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${massage})`
}


const CreateAppointment = (props) => {
  const id = props.match.params.id;

  const [choice, setChoice] = useState('');

  const { massageData } = useGetMassage(id); //Recibe la informacion del masaje segun el id

  const { validationsForm } = useValidations();

  const { form, errors, handleChange, handleSubmit } = useForm(
    appointmentForm,
    validationsForm
  ); //Hook que maneja la logica de formulario


  const handleSelectChange = (choice) => {
    return options[choice];
  };

  return (
    <div style={layout}>
      <AppointmentForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        form={form}
        errors={errors}
        massageData={massageData}
        choice={setChoice}
      />
      {errors.validForm && (
        <div>
          <Appointment
          appointment={{
            ...form,
            option: handleSelectChange(choice),
            price: massageData.price,
          }}
        />
        </div>
      )}
    </div>
  );
};

export default CreateAppointment;
