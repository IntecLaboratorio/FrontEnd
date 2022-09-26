import React from 'react';
import './style.css'
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
  
        <NavMenu>
          <NavLink to='/cadastro-patrimonio' activeStyle>
            Patrimonio
          </NavLink>
          <NavLink to='/cadastro-laboratorio' activeStyle>
            Laboratório
          </NavLink>
          <NavLink to='/cadastro-usuario' activeStyle>
            Usuário
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;