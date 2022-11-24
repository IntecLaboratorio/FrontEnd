import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import BtnEntrar from "../Buttons/btn-entrar/index.js";
import BtnAcesso from "../Buttons/btn-primeiroAcesso/index.js";
import "./style.css";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar expand="m" className="navConfig">
        <Container>
          <div className="btn-flex">
            <BtnAcesso />
            <BtnEntrar />
          </div>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
