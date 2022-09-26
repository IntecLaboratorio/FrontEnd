import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import BtnEntrar from '../Buttons/btn-entrar/index.js';
import BtnAcesso from '../Buttons/btn-primeiroAcesso/index.js';



import './style.css'
import { NavDropdown } from 'react-bootstrap';

function navbar() {
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
              <Link className='nav-link' to="/">Home</Link>
              <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                <Link className='dropdown-item' to="/cadastro-patrimonio">Cadastro de Patrimônio</Link>
                <Link className='dropdown-item' to="/cadastro-laboratorio">Cadastro de Laboratório</Link>
                <Link className='dropdown-item' to="/cadastro-usuario">Cadastro de Usuário</Link>
              </NavDropdown>
              <NavDropdown title="Cronogramas" id="basic-nav-dropdown">
                <Link className='dropdown-item' to="/cronograma-lab">Cronograma de Laboratório</Link>
                <Link className='dropdown-item' to="/cronograma-quadra">Cronograma de Quadra</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;