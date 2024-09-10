import React from 'react';
import './EmptyTodo.css';

function EmptyTodos() {
  return (
    <div className='message-container'>
      <p>¡No hay tareas para mostrar!</p>
    </div>
  );
}

export { EmptyTodos };
