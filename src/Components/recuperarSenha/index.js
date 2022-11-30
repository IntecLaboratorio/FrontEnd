import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import api from "../../Service/api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../Img/branco.png";
import "./style.css";

function Senha() {
  const [email, setEmail] = useState("");
  const [ConfirEmail, setConfirEmail] = useState("");
  const [reset, SetReset] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState("");

  function validate() {
    if (!email && !ConfirEmail) {
      toast.warn("Preencha e-mail e a confirmação!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (!email) {
      toast.warning("Informe o e-mail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (!ConfirEmail) {
      toast.warning("Confirme o e-mail!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (email != ConfirEmail) {
      toast.warning("Os e-mails são diferentes", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    return true;
  }

  const envioPassword = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);

        const dados = { email };
        await api.post("/login/reset", dados);

        toast.success("Enviamos um email com sua nova senha!", {
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
        setLoading("");
        console.log(err);
        toast.error("Não foi possivel realizar a recuperação de senha!", {
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
  };

  useEffect(() => {
    async function newPassword() {
      const { data } = await api.get("/login");
      SetReset(data);
    }
    newPassword();
  }, []);

  const handleClose = () => setShow(false);
  return (
    <>
      <Alert.Link className="btn-senha" onClick={() => setShow(true)}>
        Esqueceu sua senha?
      </Alert.Link>

      <Modal show={show} onHide={() => setShow(false)} className="modal">
        <Modal.Body>
          <section className="sectionImg">
            <img src={Logo} className="img-entrar" />
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
              <span
                className="focus-input"
                data-placeholder="Confirme seu Email"
              ></span>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={envioPassword} className="button">
            {" "}
            Avançar{" "}
          </button>
          <div className="loading-login">{loading}</div>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Senha;
