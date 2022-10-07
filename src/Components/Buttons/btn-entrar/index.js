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
  const [isDisabled, setIsDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState("");
  let navigate = useNavigate();

  function validate() {
    let errors = {};

    if (!email) {
      errors.email = toast.error("EMail é obrigatório", {
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
    if (errors.user || errors.password) {
      setErrors(errors);
      return false;
    }
    return true;
  }

  async function handleLogin() {
    if (validate()) {
      try {

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
      }
      catch (err) {
        setInvalid(toast.error("Usuário ou senha inválidos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }))
        setIsDisabled(false);
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
                onChange={(e) => {setEmail(e.target.value);
                setErrors({...errors, email: ""});
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
                onChange={(e) => {setPassword(e.target.value);
                setErrors({...errors, password: ""});
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
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}


export default BtnEntrar