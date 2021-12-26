export const useValidations = () => {
  const validationsForm = (form) => {
    let errors = {
      message: 'Completar campo',
      name: false,
      surname: false,
      date: false,
      hour: false,
      validForm: true,
    };

    if (!form.name.trim()) {
      errors.name = true;
    }
    if (!form.surname.trim()) {
      errors.surname = true;
    }
    if (!form.date.trim()) {
      errors.date = true;
    }
    if (!form.hour.trim()) {
      errors.hour = true;
    }       //Para detectar los errores en cada input

    if (
      !form.name.trim() ||
      !form.surname.trim() ||
      !form.date.trim() ||
      !form.hour.trim()
    ) {
      errors.validForm = false;
    }         // Controlador del formulario, si los inputs se encuentran vacios el formulario no es valido

    return errors;
  };

  return { validationsForm };

  //Este custom hook percibe los errores en la creacion del appointment
  // retornando una funcion que luego se utiliza en useForm hook
};
