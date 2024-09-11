import React from 'react';
import './TodoHeader.css';

function TodoHeader() {
  return (
    <div className='header-container'>
      <h1 className='title'>Listapp de tareas</h1>
      <p className='info'>Developed by me</p>
    </div>
  )
}

export { TodoHeader };