//Actualizacion React 18

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(

<App/>

);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
