import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss'
import App from './App';
import  store  from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
=======

>>>>>>> 94fba42 (Basic SPA without image)
root.render(
    
  <Provider store={store}>
      <App/>  
  </Provider>
    

);


