import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';

function CadUsuario() {

  const [enviar, setEnviar] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [rm, setRm] = useState("");
  const [curso, setCurso] = useState("");

  // async function CreateUser(){

  //   try{
  //     const data = {
  //       user
  //     }
  //   }
  // }

  return (

    <>
      <NavCadastro />
      <div className="container-cadastro secoes">
        <form className="form-cadastro">
          <section className="section-cadastro">
            <div className="wrap-input">
              <select name="select"
                className={enviar !== "" ? "has-val input" : "input"}
                type="text"
                value={enviar}
                onChange={(e) => setEnviar(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Coordenador">Coordenador</option>
                <option value="Professor">Professor</option>
                <option value="Aluno">Aluno</option>
              </select>
              <span className="focus-input" data-placeholder="Tipo de Usuário"></span>
            </div>
            <div className="wrap-input">
              <input
                className={nome !== "" ? "has-val input" : "input"}
                type="text"
                value={nome}
                style={{ color: '#FFF' }}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>
            <div className="wrap-input">
              <input
                className={tel !== "" ? "has-val input" : "input"}
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Telefone"></span>
            </div>
          </section>
          <section className="section-cadastro">
            <div className="wrap-input">
              <input
                className={cpf !== "" ? "has-val input" : "input"}
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <span className="focus-input" data-placeholder="CPF"></span>
            </div>
            <div className="wrap-input">
              <input
                className={rg !== "" ? "has-val input" : "input"}
                type="text"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
              <span className="focus-input" data-placeholder="RG"></span>
            </div>
            <div className="wrap-input">
              <input
                className={rm !== "" ? "has-val input" : "input"}
                type="text"
                value={rm}
                onChange={(e) => setRm(e.target.value)}
              />
              <span className="focus-input" data-placeholder="RM"></span>
            </div>
            <div className="wrap-input">
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
            </div>
          </section>
          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn">Cadastro</button>
            <button className="btn btn-planilhas">Cadastro com Planilha</button>
          </section>
        </form>

      </div>
    </>
  )
}

export default CadUsuario;