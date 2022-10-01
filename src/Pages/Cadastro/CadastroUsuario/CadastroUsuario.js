import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';
import api from '../../../Service/api.js';

function CadUsuario() {

  const [id_corporate, setId_corporate] = useState("")
  const [addres, setAddres] = useState("");
  const [name_user, setNome] = useState("");
  const [last_name, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  // const [rm, setRm] = useState("");
  // const [curso, setCurso] = useState("");


  async function createUser() {
    try {
      const data = {
        id_corporate, addres, name_user, last_name, cpf, rg, phone, email, password, verify
      }

      await api.post("/user", data)

      alert(` ${name_user} foi cadastrado com sucesso!`)

    } catch (err) {
      alert(`Houve um erro: ${err}`)
    }
  }

  return (

    <>
      <NavCadastro />
      <div className="container-cadastro secoes">
        <form className="form-cadastro">
          <section className="section-cadastro">
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
                className={addres !== "" ? "has-val input" : "input"}
                type="text"
                value={addres}
                onChange={(e) => setAddres(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Endereço"></span>
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
              <input
                className={last_name !== "" ? "has-val input" : "input"}
                type="text"
                value={last_name}
                onChange={(e) => setSobrenome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Sobrenome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={cpf !== "" ? "has-val input" : "input"}
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <span className="focus-input" data-placeholder="CPF"></span>
            </div>
          </section>
          s
          <section className="section-cadastro">
            <div className="wrap-input">
              <input
                className={rg !== "" ? "has-val input" : "input"}
                type="number"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
              <span className="focus-input" data-placeholder="RG"></span>
            </div>

            <div className="wrap-input">
              <input
                className={phone !== "" ? "has-val input" : "input"}
                type="number"
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
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
              <span className="focus-input" data-placeholder="Status do usuário"></span>
            </div>

            {/* <div className="wrap-input">
              <select name="select"
                className={curso !== "" ? "has-val input" : "input"}
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Administração">Administração</option>
                <option value="Contabilidade">Contabilidade</option>
                <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                <option value="Eletroeletrônica">Eletroeletrônica</option>
                <option value="Logística">Logística</option>
                <option value="Redes de Computadores">Redes de Computadores</option>
              </select>
              <span className="focus-input" data-placeholder="Curso"></span>
            </div> */}
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={createUser}>Cadastro</button>
            <button className="btn btn-planilhas">Cadastro com Planilha</button>
          </section>
        </form>

      </div>
    </>
  )
}

export default CadUsuario;