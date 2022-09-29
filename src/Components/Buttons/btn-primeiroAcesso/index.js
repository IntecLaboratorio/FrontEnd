import { useState } from "react";
import Branco from "../../../Img/branco.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css";

function Index() {
  const [enviar, setEnviar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className="container">

      <Button className="btn-outline" variant="primary" onClick={handleShow}>
        Primeiro Acesso
      </Button>

      <Modal show={show} onHide={handleClose}>

        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

              <Modal.Header>
                <span className="login-form-title">
                  <img src={Branco} alt="logo" className="img-acesso" />
                </span>
              </Modal.Header>

              <Modal.Body>
                <div className="wrap-input">
                  <select name="select"
                    className={enviar !== "" ? "has-val input" : "input"}
                    type="email"
                    value={enviar}
                    onChange={(e) => setEnviar(e.target.value)}
                  >
                    <option value="" disable selected></option>
                    <option value="Coordenador">Coordenador</option>
                    <option value="Professor">Professor</option>
                    <option value="Aluno">Aluno</option>
                  </select>
                  <span className="focus-input" data-placeholder="Enviar como"></span>
                </div>

                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                  <input
                    className={password !== "" ? "has-val input" : "input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Password"></span>
                </div>

              </Modal.Body>

              <section className="footer">

                <div className="container-login-form-btn">
                  <button className="login-form-btn">Enviar</button>
                </div>

                <div className="text-center">
                  <span className="txt1">Já possui conta? </span>
                  <a className="txt2" href="#">Entrar</a>
                </div>

              </section>

            </form>
          </div>
        </div>

      </Modal>
    </div>

  );
}

export default Index;