import React from 'react';
import './TodosLoading.css';
import { Hourglass } from 'react-loader-spinner';

function TodosLoading() {
  return (
    <div className='LoadingTodo-container '>
      <Hourglass
        visible={true}
        height="120"
        width="120"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#b4b2b2', '#919191']}
      />
    </div>
  );
}

export { TodosLoading };
