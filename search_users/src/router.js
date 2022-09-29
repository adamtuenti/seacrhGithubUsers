import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/home/home'
import Error from './components/pages/error/error'
import Repositorios from "./components/pages/repositorios/repositorios";


const Router = () => {


  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path='/repositorios/:user' element={<Repositorios/>} />
      </Routes>
  );
};

export default Router;
