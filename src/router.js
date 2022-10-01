import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBarUser from './components/pages/usuarios/searchBar'
import Error from './components/pages/error/error'
import RepositoriosUsuario from "./components/pages/usuarios/usuarioRepositorios";
import UsuarioDetalle from "./components/pages/usuarios/usuarioDetalle"
import SearchBarRepo from "./components/pages/repositorios/searchBar"


const Router = () => {


  return (
      <Routes>
        <Route exact path="/" element={<SearchBarUser />} />
        <Route exact path="/usuarios" element={<SearchBarUser />} />
        <Route path="*" element={<Error />} />
        <Route path='/repositorios/:user' element={<RepositoriosUsuario/>} />
        <Route path='/repositorios' element={<SearchBarRepo/>} />
        <Route path='/perfil/:user' element={<UsuarioDetalle/>} />
      </Routes>
  );
};

export default Router;
