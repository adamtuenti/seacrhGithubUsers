import React from "react";
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/images/tia.png'
import { useHistory } from "react-router-dom";
import './header.scss'
import { Affix } from 'rsuite';

function Header() {
  const history = useHistory();

  return (
    <div className='header-tia'>
      <Affix>
        <Navbar className="ml-auto navbar-red" expand="lg">
            <Navbar.Brand href="/home">
              <img
                alt=""
                id = 'imageTia'
                src={logo}
                style={{ textAlign: 'left', width: '85px', marginLeft: '25px' }}
              />{""}
            </Navbar.Brand>

  

        </Navbar>
      </Affix>

    </div>


  );
}

export default Header;
