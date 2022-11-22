import { useState } from "react";
import Branco from "../../../Img/branco.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import api from "../../../Service/api";
import jwt_decode from "jwt-decode";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  function validate() {

    if (!email && !password) {
      toast.warn("Preencha e-mail e senha!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    }

    if (!email) {
      toast.warn("O e-mail é obrigatório", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    }
    if (!password) {
      toast.warn("A senha é obrigatória", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    }

    return true;
  }

  async function validateFirstAccess(e) {
    e.preventDefault()
    if (validate()) {
      try {

        setLoading(<Spinner id="loading" animation="border" />);
        setIsDisabled(true);

        const dados = { email };
        const { data } = await api.post('/firstAccess', dados);


        if (data.firstAccess == 0) {
          toast.error("Você já utilizou o primeiro acesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsDisabled(false);
          setLoading("");
          setEmail("")
          setPassword("")
          handleClose();
        }

        if (data.firstAccess == 1) {
          firstAccess();
          updateFirstAccess();
        }
        setLoading("");
        handleClose();

      }
      catch (err) {
        setIsDisabled(false);
        setLoading("");
        console.log(err);
        toast.error("tente mais tarde!", {
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
  }

  async function firstAccess() {
    try {

      setLoading(<Spinner id="loading" animation="border" />);
      setIsDisabled(true);

      const dados = { email, password };
      const { data } = await api.post('/login', dados);

      const dataToken = jwt_decode(data.token);

      sessionStorage.setItem("login", true);
      sessionStorage.setItem('typeUser', dataToken.infoUser.typeUser)
      sessionStorage.setItem('userName', dataToken.infoUser.userName)
      sessionStorage.setItem('email', email)

      if (dataToken.infoUser.typeUser == 1) {
        navigate('/perfil')
      } else if (dataToken.infoUser.typeUser == 2) {
        navigate('/perfil')
      } else {
        navigate('/perfil')
      }
      toast.success("Seja bem-vindo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleClose();
      setLoading("");

    } catch (err) {
      setIsDisabled(false);
      setLoading("");
      console.log(err);
      toast.error("Email ou senha invalidos!", {
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

  const updateFirstAccess = async () => {
    const dados = { email };
    await api.put('/firstAccess', dados);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      validateFirstAccess();
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
                  <span className="focus-input" data-placeholder="Senha"></span>
                </div>

              </Modal.Body>

              <section className="footer">

                <div className="container-login-form-btn">
                  <button className="login-form-btn" onClick={validateFirstAccess} disabled={isDisabled}>Enviar</button>
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