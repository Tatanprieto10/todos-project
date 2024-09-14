import React from 'react';
import './TodoHeader.css';
import { DevInfo } from './DevInfo';

function TodoHeader() {
  return (
    <div className='header-container'>
      <h1 className='title'>ListApp de tareas</h1>
      <DevInfo />
    </div>
  )
}

export { TodoHeader };