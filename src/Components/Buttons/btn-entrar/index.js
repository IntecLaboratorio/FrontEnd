import { Alert, Button, Modal, Spinner } from 'react-bootstrap';
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
  const [isDisabled, setIsDisabled] = useState(false);
  const [invalid, setInvalid] = useState("");
  const [loading, setLoading] = useState("");
  let navigate = useNavigate();

  function validate() {
    let errors = {};

    if (!email) {
      errors.email = toast.error("E-Mail é obrigatório", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!password) {
      errors.password = toast.error("Senha é obrigatória", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    if (errors.email || errors.password) {
      return false;
    }
    return true;
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation='border' />);
        setIsDisabled(true);

        const data = { email, password }
        const { response } = await api.post('/login', data);

        sessionStorage.setItem("login", true);
        navigate("/home")

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
        setLoading("");
      }
      catch (err) {
        setIsDisabled(false);
        setLoading("");
        console.log(err);
        invalid(toast.error("Usuário ou senha inválidos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }))
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleLogin();
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setInvalid("");
                }}
                onKeyDown={handleKeyDown}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setInvalid("");
                }}
                onKeyDown={handleKeyDown}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleLogin} disabled={isDisabled} className="button"> Entrar </button>
          <>
            <RecuperarSenha />
          </>
          <div className='loading-login'>{loading}</div>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}


export default BtnEntrar