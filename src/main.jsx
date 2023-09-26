import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChangeBorderColor } from './borderColor.jsx';
import { Modal } from './Modal.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Modal/>
    <ChangeBorderColor /> 
  
  </React.StrictMode>
);
