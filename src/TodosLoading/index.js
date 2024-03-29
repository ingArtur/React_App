// import React from 'react'; 
// // import './TodoLoading.css';

// function TodosLoading() {

//     return (
//     <p> Cargando...</p> 
//     );
//   }

// export {TodosLoading};

import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };