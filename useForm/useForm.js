import { useState } from "react";

export const useForm = (initialForm = {}) => {
  //
  const [formState, setFormState] = useState(initialForm);

  //del evento se desestructrua el target
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    //mi solucion
    /*
    const objFormState = { ...formState };
    for (let clave in objFormState) {
      objFormState[clave] = "";
    }
    setFormState(objFormState);
    */
    setFormState(initialForm);
  };

  return {
    //desesctruturar el formState o esparcir las propiedades
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
