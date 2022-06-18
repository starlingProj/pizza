import React from "react";

import { Header } from "./components";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home, Cart } from './pages'

import axios from 'axios'



import {useDispatch } from "react-redux";


function App() {
 

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
