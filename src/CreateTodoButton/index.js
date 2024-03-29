// import './CreateTodoButton.css';

// function CreateTodoButton({setOpenModal}) {
//     return (
//  <button 
//  className="CreateTodoButton"
//   onClick= { ()  => {setOpenModal(state => !state);
//    }  
//   }
//   >+</button>
//     );
//   }

// export {CreateTodoButton};

import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };