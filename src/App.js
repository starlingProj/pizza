import React from "react";

import { Header } from "./components";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home, Cart } from './pages'

import axios from 'axios'

<<<<<<< HEAD
import { setPizzas } from "./redux/actions/pizzas";
=======

>>>>>>> 94fba42 (Basic SPA without image)

import {useDispatch } from "react-redux";


function App() {
<<<<<<< HEAD
  const dispatch = useDispatch();
  React.useEffect(() => {

    axios.get('http://ec2-3-131-133-70.us-east-2.compute.amazonaws.com:8000/api/catalog/?format=json').then(({ data }) => {
      dispatch(setPizzas(data.results))
    }).catch(err => {
      console.error(err)
    })
  }, []);
=======
 
>>>>>>> 94fba42 (Basic SPA without image)

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
