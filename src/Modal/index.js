// import React from "react";
// import ReactDOM from "react-dom";

// function Modal({ children }) {
//     return  ReactDOM.createPortal (
//         <div className="Modal">
//             {children}
//         </div>,
//         document.getElementById('modal')
//     );
// }

// export { Modal };

import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };