import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import logo from '../../../assets/github.png'
import './header.scss'

function Header() {

  return (
    <div className='header-tia'>
        <Navbar className="ml-auto navbar-red" expand="lg">
            <Navbar.Brand href="/usuarios">
              <img
                alt=""
                id = 'imageTia'
                src={logo}
                style={{ textAlign: 'left', width: '45px', marginLeft: '25px',marginRight: '12.5px' }}
              />{""}

              Github Search
            </Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/usuarios">Usuarios</Nav.Link>
            <Nav.Link href="/repositorios">Repositorios</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>

  

        </Navbar>

    </div>


  );
}

export default Header;
