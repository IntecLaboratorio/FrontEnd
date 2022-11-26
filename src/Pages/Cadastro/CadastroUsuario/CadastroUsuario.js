import { useState } from "react";
import "../cadastro.css";
import NavCadastro from "../../../Components/NavCadastro";
import api from "../../../Service/api.js";
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner, OverlayTrigger, Tooltip } from "react-bootstrap";
import Sidebar from "../../../Components/Sidebar/sidebar.js";

function CadUsuario() {
  const [id_corporate, setId_corporate] = useState("");
  const [name_user, setNome] = useState("");
  const [type_user, setTipoUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [loading, setLoading] = useState("");

  function validate() {
    let errors = {};
    const minuscula = /(?=.*[a-z])/;
    const maiuscula = /(?=.*[A-Z])/;
    const especial = /(?=.*[$*&@#])/;

    if (
      !id_corporate ||
      !name_user ||
      !type_user ||
      !email ||
      !password ||
      !verify ||
      !verify
    ) {
      errors.input = toast.warn("Todos os campos devem ser preenchidos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (!errors.input) {
      if (
        email.length > 256 ||
        !email.includes("@") ||
        !email.includes(".") ||
        email.length <= 10
      ) {
        errors.email = toast.warn("E-Mail inválido!", {
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

    if (!errors.input) {
      if (password.length < 8) {
        errors.password = toast.warn("Senha muito curta!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (!errors.password) {
        if (
          !minuscula.exec(password) &&
          !maiuscula.exec(password) &&
          !especial.exec(password)
        ) {
          errors.password = toast.warn(
            "A senha deve conter letra minúscula, maiúscula e caractere especial",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
      if (!errors.password) {
        if (!minuscula.exec(password)) {
          errors.password = toast.warn(
            "A senha deve conter ao menos uma letra minúscula",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
      if (!errors.password) {
        if (!maiuscula.exec(password)) {
          errors.password = toast.warn(
            "A senha deve conter ao menos uma letra maiúscula",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
      if (!errors.password) {
        if (!especial.exec(password)) {
          errors.password = toast.warn(
            "A senha deve conter ao menos um caractere especial",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
    }

    if (errors.input || errors.email || errors.password) {
      return false;
    }

    return true;
  }

  const validateEmail = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);
        const data = {
          email,
        };
        await api.post("/validateEmail", data);

        createUser();
      } catch (err) {
        setLoading("");
        setEmail("");
        toast.error("Este email já está cadastrado!", {
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

  async function createUser() {
    try {
      const data = {
        id_corporate,
        type_user,
        name_user,
        email,
        password,
        verify,
      };

      await api.post("/user", data);

      toast.success(`${name_user} cadastrado(a) com sucesso!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setLoading("");
      setId_corporate("");
      setNome("");
      setTipoUsuario("");
      setEmail("");
      setPassword("");
      setVerify("");
    } catch (err) {
      setLoading("");
      toast.error(`Houve um problema: ${err}`, {
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

  return (
    <div className="d-flex-user">
      <Sidebar />
      <div className="hide-mobile">
        <NavCadastro />
      </div>
      <div className="container-cadastro secoes">
        <form className="form-cadastro">
          <section className="section-cadastro justify-center-mobile-user">
            <div className="wrap-input">
              <input
                className={id_corporate !== "" ? "has-val input" : "input"}
                type="text"
                value={id_corporate}
                style={{ color: "#FFF" }}
                onChange={(e) => setId_corporate(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Instituição"
              ></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={type_user !== "" ? "has-val input" : "input"}
                type="text"
                value={type_user}
                onChange={(e) => setTipoUsuario(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Coordenador</option>
                <option value="2">Professor</option>
                <option value="3">Aluno</option>
              </select>
              <span
                className="focus-input"
                data-placeholder="Tipo de Usuário"
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={name_user !== "" ? "has-val input" : "input"}
                type="text"
                value={name_user}
                style={{ color: "#FFF" }}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

          </section>
          <section className="section-cadastro justify-center-mobile-user">

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-Mail"></span>
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
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </OverlayTrigger>

              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={verify !== "" ? "has-val input" : "input"}
                type="text"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Ativo</option>
                <option value="0">Inativo</option>
              </select>
              <span
                className="focus-input"
                data-placeholder="Status do usuário"
              ></span>
            </div>
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={validateEmail}>
              Cadastrar
            </button>
            <button className="btn btn-planilhas">Cadastro com Planilha</button>
          </section>
          <div className="loading">{loading}</div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CadUsuario;
