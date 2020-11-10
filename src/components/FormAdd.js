import React from 'react';
import {useForm} from './useForm';

const FormAdd = ({addToDo}) => {
  const [value, handleInputChange, reset] = useForm('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length <= 1) {
      return;
    }
    addToDo({
      id: new Date().getTime(),
      task: value,
      done: false,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="TaskApp-Form">
      <input type="text" name="description" placeholder="Aprender..." value={value} onChange={handleInputChange} autocomplete="off" />
      <button type="submit" className="btn">
        +
      </button>
    </form>
  );
};

export default FormAdd;
