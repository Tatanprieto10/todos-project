import React from 'react';
import { TodoContext } from '../TodoContext';
import './todoForm2.css';
import { AdditionError } from './AdditionError';

function TodoForm2() {
  const {
    addTodo,
    warningErrorStatus
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <label>Escribe tu nueva tarea</label>
        <textarea
          placeholder="Escribe aquí tu tarea"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >Añadir</button>
        </div>
        {warningErrorStatus && 
          <AdditionError />
        }
      </form>
    </div>
  )
}

export { TodoForm2 }; 