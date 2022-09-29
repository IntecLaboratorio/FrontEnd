import { Alert, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import Logo from '../../../Img/branco.png';
import './style.css';

function BtnEntrar() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <>
      <Button className='btn-fill' variant="primary" onClick={() => setShow(true)}>
        Entrar
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="modal"
      >

        <Modal.Body>
          <section className='sectionImg'>
            <img src={Logo} className='img-entrar' />
          </section>
          <section>

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
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="button"> Entrar </button>
          <>
            {[
              '',
            ].map((variant) => (
              <Alert key={variant} variant={variant}>
                <Alert.Link href="#">Esqueceu sua senha?</Alert.Link>
              </Alert>
            ))}
          </>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default BtnEntrar