import { useState } from "react";
import Branco from "../../../Img/branco.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

function Index() {
  const [enviar, setEnviar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  function validate() {
    let errors = {}

    if (enviar == "") {
      errors.enviar = toast.warn("Tipo de usuário é obrigatório", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!email) {
      errors.email = toast.warn("E-Mail é obrigatório", {
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
      errors.password = toast.warn("Senha é obrigatória", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (errors.enviar || errors.email || errors.password) {
      return false;
    }
    return true;
  }

  async function firstAccess(e) {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation='border' />);
        setIsDisabled(true);

        const data = { enviar, email, password }
        // local que sera enviado os dados

        sessionStorage.setItem("login", true);
        navigate("/perfil")

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
        // document.location.reload(true);

      }
      catch (err) {
        setIsDisabled(false);
        setLoading("");
        console.log(err)
        toast.error("Usuário ou senha inválidos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      firstAccess();
    }
  }

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
                    onChange={(e) => {
                      setEnviar(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                  >
                    <option value={""} disable selected></option>
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
                    onChange={(e) => {
                      setEmail(e.target.value);
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
                    }}
                    onKeyDown={handleKeyDown}
                  />
                  <span className="focus-input" data-placeholder="Password"></span>
                </div>

              </Modal.Body>

              <section className="footer">

                <div className="container-login-form-btn">
                  <button className="login-form-btn" onClick={firstAccess} disabled={isDisabled}>Enviar</button>
                </div>

                <div className="text-center">
                  <span className="txt1">Já possui conta? </span>
                  <a className="txt2" href="#">Entrar</a>
                </div>
                <div className='loading-login'>{loading}</div>
              </section>

            </form>
          </div>
        </div>

      </Modal>
      <ToastContainer />
    </div>

  );
}

export default Index