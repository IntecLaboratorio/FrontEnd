import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import BtnEntrar from '../Buttons/btn-entrar/index.js';
import BtnAcesso from '../Buttons/btn-primeiroAcesso/index.js';
import './style.css'
import { NavDropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';


function NavBar() {

  return (
    <>
      <Navbar expand="m" className='navConfig'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Link className='intec' to="/">InTec</Link>

          <div className='btn-flex'>
            <BtnAcesso /> 
             <BtnEntrar /> 
            

          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className='nav-link' to="/">Inicio</Link>
            <Link className='nav-link' to="/home">Home</Link>
            
              <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                <Link className='dropdown-item' to="/cadastro-patrimonio">Cadastro de Patrimônio</Link>
                <Link className='dropdown-item' to="/cadastro-laboratorio">Cadastro de Laboratório</Link>
                <Link className='dropdown-item' to="/cadastro-usuario">Cadastro de Usuário</Link>
              </NavDropdown>

              <NavDropdown title="Manutenção" id="basic-nav-dropdown">
                <Link className='dropdown-item' to="/manutencao">Consulta de Manutenção</Link>
                <Link className='dropdown-item' to="/solicitacaoManutencao">Solicitação de Manutenção</Link>
              </NavDropdown>
              <Link className='nav-link' to="/cronograma-lab">Cronograma de Laboratório</Link>
              {/* <Link to="/cronograma-quadra">Cronograma de Quadra</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;