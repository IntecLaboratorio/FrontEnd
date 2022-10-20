import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';
import api from '../../../Service/api.js';
import { useForm } from 'react-hook-form';
import { IMaskInput } from "react-imask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../../Components/Sidebar/sidebar.js'

function CadUsuario() {

  const [id_corporate, setId_corporate] = useState("")
  const [name_user, setNome] = useState("");
  const [type_user, setTipoUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [tipoEndereco, setTipoEndereco] = useState(null)
  const [endereco, setEndereco] = useState(null);
  const [numero, setNumero] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [cep, setCep] = useState(null);
  const [pg, setPg] = useState(false);

  function formContinuo(e) {
    e.preventDefault();
    if (pg) {
      setPg(false);
    } else {
      setPg(true);
    }
  }

  const { register, setValue, setFocus, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }


  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, ' ');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('endereco', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf)
      setFocus('numero')
    });
  }

  async function createUser(e) {
    e.preventDefault();

    try {
      const data = {
        id_corporate, type_user, name_user, cpf, rg, phone, email, password, verify
      }

      const dataEnd = {
        tipoEndereco, endereco, numero, bairro, cidade, estado, cep, cpf
      }

      if (id_corporate && type_user && name_user && cpf && rg && phone && email && password && verify && tipoEndereco && endereco && numero && bairro && cidade && estado && cep) {
        toast.success(`${name_user} cadastrado com sucesso!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warn('Todos os campos devem ser preenchidos', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      await api.post("/user", data)
      await api.post("/address", dataEnd)

      setId_corporate("");
      setNome("");
      setTipoUsuario("");
      setCpf("");
      setRg("");
      setPhone("");
      setEmail("");
      setPassword("");
      setVerify("");

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
      <Sidebar/>
      <div className="hide-mobile">
        <NavCadastro />
      </div>
      {pg == false ? <div className="container-cadastro secoes">
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
            <div className="wrap-input">
              <IMaskInput
                className={rg !== "" ? "has-val input" : "input"}
                mask="00.000.000-0"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
              <span className="focus-input" data-placeholder="RG"></span>
            </div>
          </section>
          <section className="section-cadastro justify-center-mobile-user">

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
            <button className="btn" onClick={formContinuo}>Avançar</button>
            <button className="btn btn-planilhas">Cadastro com Planilha</button>
          </section>
        </form>
      </div> :
        <div className="container-cadastro secoes">
          <form className="form-cadastro" onSubmit={handleSubmit(onSubmit)}>
            <section className="section-cadastro justify-center-mobile-user">
              <div className="wrap-input">
                <input
                  className={tipoEndereco !== "" ? "has-val input" : "input"}
                  type="text"
                  value={tipoEndereco}
                  style={{ color: '#FFF' }}
                  onChange={(e) => setTipoEndereco(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Tipo de Endereço"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={cep !== "" ? "has-val input" : "input"}
                  mask="00000-000"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  {...register("cep")} onBlur={checkCEP}
                />
                <span className="focus-input" data-placeholder="CEP"></span>
              </div>
              <div className="ncep">
                <a href='https://buscacepinter.correios.com.br/app/endereco/index.php' target="_blank"> Não sei meu CEP</a>
              </div>
              <div className="wrap-input">
                <input
                  className={endereco !== "" ? "has-val input" : "input"}
                  type="text"
                  {...register("endereco")}
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}

                />
                <span className="focus-input" data-placeholder="Endereço"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={numero !== "" ? "has-val input" : "input"}
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  {...register("numero")}
                />
                <span className="focus-input" data-placeholder="Número"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={bairro !== "" ? "has-val input" : "input"}
                  type="text"
                  value={bairro}
                  style={{ color: '#FFF' }}
                  onChange={(e) => setBairro(e.target.value)}
                  {...register("bairro")}
                />
                <span className="focus-input" data-placeholder="Bairro"></span>
              </div>

            </section>

            <section className="section-cadastro justify-center-mobile-user">

              <div className="wrap-input">
                <input
                  className={cidade !== "" ? "has-val input" : "input"}
                  type="text"
                  value={cidade}
                  style={{ color: '#FFF' }}
                  onChange={(e) => setCidade(e.target.value)}
                  {...register("cidade")}
                />
                <span className="focus-input" data-placeholder="Cidade"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={estado !== "" ? "has-val input" : "input"}
                  type="text"
                  value={estado}
                  style={{ color: '#FFF' }}
                  onChange={(e) => setEstado(e.target.value)}
                  {...register("estado")}
                />
                <span className="focus-input" data-placeholder="Estado"></span>
              </div>


            </section>

            <section className="section-btn-cadastro section-btn-cadastro--column">
              <button className="btn" onClick={createUser} >Cadastrar</button>
              <button className="btn" onClick={formContinuo}>Voltar</button>
            </section>

          </form>

        </div>}
      <ToastContainer />
    </div>
  )
}

export default CadUsuario;