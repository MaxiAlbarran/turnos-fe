import { useState, useEffect} from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form))
  };

  
  

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
  };
};
