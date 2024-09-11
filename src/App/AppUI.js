import React from 'react';
import { TodoHeader } from '../TodosHeader';
import { TodoForm2 } from '../TodoForm2';
import { MainTodoContainer } from '../TodoInforContainer';
import './AppUI.css'

function AppUI() {

  
  return (
    <>
      <div className='main-general-container'>
        <TodoHeader />
        <TodoForm2 />
        <MainTodoContainer />
      </div>
    </>
  );
}

export { AppUI };
