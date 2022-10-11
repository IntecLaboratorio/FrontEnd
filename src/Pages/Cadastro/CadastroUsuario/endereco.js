import { useState } from "react";
import '../cadastro.css';
import api from '../../../Service/api.js';
import { Link } from 'react-router-dom';
import { IMaskInput } from "react-imask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Sidebar from '../../../Components/Sidebar/sidebar.js'

function CadUsuario() {

  const [tipoEndereco, setTipoEndereco] = useState(null)
  const [endereco, setEndereco] = useState(null);
  const [numero, setNumero] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [estado, setEstado] = useState(null);
  const [cep, setCep] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  async function createUser(e) {
    e.preventDefault();

    try {
      setIsDisabled(true);

      const data = {
        tipoEndereco, endereco, numero, bairro, cidade, estado, cep
      }

      if (tipoEndereco && endereco && numero && bairro && cidade && estado && cep) {
        toast.success(`Usuário cadastrado com sucesso!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setIsDisabled(false);

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
        {/* <Sidebar></Sidebar> */}
      <div className="container-cadastro secoes">
        <form className="form-cadastro">
          <section className="section-cadastro justify-center-mobile-user">
            <div className="wrap-input">
              <input
                className={tipoEndereco !== null ? "has-val input" : "input"}
                type="text"
                value={tipoEndereco}
                style={{ color: '#FFF' }}
                onChange={(e) => setTipoEndereco(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Tipo de Endereço"></span>
            </div>

            <div className="wrap-input">
              <input
                className={endereco !== null ? "has-val input" : "input"}
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Endereço"></span>
            </div>

            <div className="wrap-input">
              <input
                className={numero !== null ? "has-val input" : "input"}
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Número"></span>
            </div>

            <div className="wrap-input">
              <input
                className={bairro !== null ? "has-val input" : "input"}
                type="text"
                value={bairro}
                style={{ color: '#FFF' }}
                onChange={(e) => setBairro(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Bairro"></span>
            </div>

            </section>

            <section className="section-cadastro justify-center-mobile-user">

            <div className="wrap-input">
              <input
                className={cidade !== null ? "has-val input" : "input"}
                type="text"
                value={cidade}
                style={{ color: '#FFF' }}
                onChange={(e) => setCidade(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Cidade"></span>
            </div>

            <div className="wrap-input">
                <input
                    className={estado !== null ? "has-val input" : "input"}
                    type="text"
                    value={estado}
                    style={{ color: '#FFF' }}
                    onChange={(e) => setEstado(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Estado"></span>
                </div>

                <div className="wrap-input">
                <IMaskInput
                    className={cep !== null ? "has-val input" : "input"}
                    mask="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <span className="focus-input" data-placeholder="CEP"></span>
                </div>


            </section>

                <section className="section-btn-cadastro section-btn-cadastro--column">
                    <button className="btn" onClick={createUser} disabled={isDisabled}>Cadastrar</button>
                    <Link to="/cadastro-usuario"><button className="btn">Voltar</button></Link>
                </section>

        </form>
        <ToastContainer />

      </div>
    </div>
  )
}

export default CadUsuario;