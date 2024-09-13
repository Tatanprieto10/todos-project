import React from 'react';
import {ReactComponent as WarningSVG } from './warning.svg';
import './AdditionError.css'

function AdditionError() {

  return (
    <div className='warning-container'>
      <span>
        <WarningSVG className='warnign-icon' />
      </span>
      <p className='warning-message'> 
        Se ha ingresado una tarea vacía
      </p>
    </div>
  )
}

export { AdditionError };