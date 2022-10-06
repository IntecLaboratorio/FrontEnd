import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';
import api from '../../../Service/api.js';
import { IMaskInput } from "react-imask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CadUsuario() {

  const [id_corporate, setId_corporate] = useState("")
  const [address, setAddress] = useState("");
  const [name_user, setNome] = useState("");
  const [type_user, setTipoUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");

  async function createUser() {
    try {
      const data = {
        id_corporate, address, type_user, name_user, cpf, rg, phone, email, password, verify
      }

      await api.post("/user", data)

      toast.success(`${name_user} cadastrado com sucesso!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (err) {
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
                style={{ color: '#FFF' }}
                onChange={(e) => setId_corporate(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Instituição"></span>
            </div>

            <div className="wrap-input">
              <input
                className={address !== "" ? "has-val input" : "input"}
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Endereço"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
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
              <span className="focus-input" data-placeholder="Tipo de Usuário"></span>
            </div>

            <div className="wrap-input">
              <input
                className={name_user !== "" ? "has-val input" : "input"}
                type="text"
                value={name_user}
                style={{ color: '#FFF' }}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <IMaskInput
                className={cpf !== "" ? "has-val input" : "input"}
                mask="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <span className="focus-input" data-placeholder="CPF"></span>
            </div>
          </section>
          <section className="section-cadastro justify-center-mobile-user">
            <div className="wrap-input">
              <IMaskInput
                className={rg !== "" ? "has-val input" : "input"}
                mask="00.000.000-0"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
              <span className="focus-input" data-placeholder="RG"></span>
            </div>

            <div className="wrap-input">
              <IMaskInput
                className={phone !== "" ? "has-val input" : "input"}
                mask="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Telefone"></span>
            </div>

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
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={verify !== "" ? "has-val input" : "input"}
                type="text"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Ativo</option>
                <option value="0">Inativo</option>
              </select>
              <span className="focus-input" data-placeholder="Status do usuário"></span>
            </div>
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={createUser}>Cadastro</button>
            <button className="btn btn-planilhas">Cadastro com Planilha</button>
          </section>
        </form>
        <ToastContainer />

      </div>
    </div>
  )
}

export default CadUsuario;