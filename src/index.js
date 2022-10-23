import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
render(<BrowserRouter><App/></BrowserRouter>, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './scss/main.scss';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//    <BrowserRouter>
//       <App />
//    </BrowserRouter>
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
