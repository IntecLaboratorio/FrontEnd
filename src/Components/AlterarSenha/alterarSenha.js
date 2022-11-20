import { Button, Modal, Spinner } from "react-bootstrap";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import api from "../../Service/api.js";
import { useNavigate } from "react-router-dom";

function AlterarSenha() {
  const [senha, setsenha] = useState("");
  const [confirmSenha, setConfirmsenha] = useState("");
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState("");
  let navigate = useNavigate();

  const validate = () => {
    if (!senha && !confirmSenha) {
      toast.warn("Preencha os dois campos!", {
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
    if (!senha) {
      toast.warn("Preencha sua senha atual", {
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
    if (!confirmSenha) {
      toast.warn("Confirme sua senha atual", {
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
    if (senha != confirmSenha) {
      toast.warn("As senhas não são iguais", {
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
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);
        setIsDisabled(true);

        const email = sessionStorage.getItem("email");
        const dados = { email, senha };
        await api.post("/passwordUser", dados);
        

        setLoading("");
        handleClose();
        navigate("*");

      } catch (err) {
        setIsDisabled(false);
        setLoading("");
        console.log(err);
        toast.error("Senha incorreta!", {
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
  return (
    <>
      <Button className="btn-alterarSenha" onClick={handleShow}>
        Alterar Senha
      </Button>

      <Modal show={show} onHide={() => setShow(false)} className="modal">
        <Modal.Body>
          <section>
            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="senha"
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={confirmSenha !== "" ? "has-val input" : "input"}
                type="email"
                value={confirmSenha}
                onChange={(e) => setConfirmsenha(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Confirme sua Senha"
              ></span>
            </div>

            <div className="loading-password">{loading}</div>

            <div className="container-login-form-btn">
              <button
                className="btn-alterarSenha"
                onClick={updatePassword}
                disabled={isDisabled}
              >
                Alterar Senha
              </button>
            </div>
          </section>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default AlterarSenha;
