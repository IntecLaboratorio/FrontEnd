import { useState } from "react";
import { useForm } from 'react-hook-form';
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
      <div className="container-cadastro secoes">
        <form className="form-cadastro" onSubmit={handleSubmit(onSubmit)}>
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
                className={cep !== null ? "has-val input" : "input"}
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
                className={endereco !== null ? "has-val input" : "input"}
                type="text"
                {...register("endereco")}
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
                {...register("numero")}
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
                {...register("bairro")}
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
                {...register("cidade")}
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
                {...register("estado")}
              />
              <span className="focus-input" data-placeholder="Estado"></span>
            </div>


          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={createUser} >Cadastrar</button>
            <Link to="/cadastro-usuario"><button className="btn">Voltar</button></Link>
          </section>

        </form>
        <ToastContainer />

      </div>
    </div>
  )
}

export default CadUsuario;