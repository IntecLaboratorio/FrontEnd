import { Alert, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import RecuperarSenha from '../../recuperarSenha/index.js';
import Logo from '../../../Img/branco.png';
import api from '../../../Service/api.js'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function BtnEntrar() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handleLogin() {
    try {
      const data = { email, password }
      const { response } = await api.post('/login', data);

      sessionStorage.setItem("login", true);
      navigate("/home")
      // alert("Seja bem-vindo!")
      toast.success("Seja bem-vindo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleClose()
    }
    catch (err) {
      toast.error("Usuário não cadastrado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

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
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleLogin} className="button"> Entrar </button>
          <>
            <RecuperarSenha />
          </>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}


export default BtnEntrar