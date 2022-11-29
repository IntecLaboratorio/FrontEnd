import { Alert, Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import api from '../../Service/api.js'
import Logo from '../../Img/branco.png';
import './style.css';

function Senha() {


  const [email, setEmail] = useState("");
  const [ConfirEmail, setConfirEmail] = useState("");
  const [resetPassword, SetResetPassword] = useState("");
  const [show, setShow] = useState(false);


  useEffect(() => {

    async function newPassword() {
      const { data } = await api.get('/login');
      SetResetPassword(data)
    }
    newPassword(resetPassword);
  }, [])

  const handleClose = () => setShow(false);
  return (
    <>
      <Alert.Link className='btn-senha' onClick={() => setShow(true)}>
        Esqueceu sua senha?
      </Alert.Link>

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
                className={ConfirEmail !== "" ? "has-val input" : "input"}
                type="email"
                value={ConfirEmail}
                onChange={(e) => setConfirEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme seu Email"></span>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="button"> Avançar </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default Senha