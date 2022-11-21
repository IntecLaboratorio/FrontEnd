import {
  Button,
  Modal,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import api from "../../Service/api.js";

function AlterarSenha() {
  const [senhaAtual, setsenhaAtual] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmSenha, setConfirmsenha] = useState("");
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState("");

  const validate = () => {
    
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#%])(?=.*[0-9])/;

    if (!senhaAtual && !senha && !confirmSenha) {
      toast.warn("Preencha todos os campos!", {
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
    if (!senhaAtual) {
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
    if (!senha) {
      toast.warn("Preencha sua nova senha", {
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
      toast.warn("Confirme sua nova senha", {
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
      setsenha("");
      setConfirmsenha("");
      return false;
    }
    if (senha == senhaAtual) {
      toast.warn("nova senha igual a atual", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setsenha("");
      setsenhaAtual("");
      return false;
    }
    if (senha.length < 8) {
      toast.warn("Senha muito curta!", {
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
    if (!senhaForte.exec(senha)) {
      toast.warn("A senha deve conter numeros, letras minúsculas, maiúsculas e caracteres especiais", {
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

  const selectPassword = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);
        setIsDisabled(true);

        const email = sessionStorage.getItem("email");
        const dados = { email, senhaAtual };
        await api.post("/passwordUser", dados);
       
        updatePassword();

        setIsDisabled(false);
        setLoading("");
        setsenhaAtual("");
        setsenha("");
        setConfirmsenha("");
        handleClose()

      } catch (err) {
        setIsDisabled(false);
        setLoading("");
        console.log(err);
        toast.error("Senha atual incorreta!", {
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

  const updatePassword = async () => {
      try {
        const email = sessionStorage.getItem("email");
        const dados = { senha, email };
        await api.put("/passwordUser", dados);

        toast.success("Senha atualizada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      } catch (err) {
        console.log(err);
        toast.error("Não foi possivel atualizar sua senha", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
                className={senhaAtual !== "" ? "has-val input" : "input"}
                type="password"
                value={senhaAtual}
                onChange={(e) => setsenhaAtual(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Senha Atual"
              ></span>
            </div>
            <div className="wrap-input">
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    Sua senha deverá ter no mínimo 8 caracteres e incluir
                    combinação de números, letras e caracteres especiais
                    (@#!%$).
                  </Tooltip>
                }
              >
                <input
                  className={senha !== "" ? "has-val input" : "input"}
                  type="password"
                  value={senha}
                  onChange={(e) => setsenha(e.target.value)}
                />
              </OverlayTrigger>
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={confirmSenha !== "" ? "has-val input" : "input"}
                type="password"
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
                onClick={selectPassword}
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
