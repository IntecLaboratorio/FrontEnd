import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { patrimoniosData } from './patrimoniosData.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import api from '../../../Service/api.js';
import { Spinner } from 'react-bootstrap';
import Sidebar from '../../../Components/Sidebar/sidebar.js'
import DatePick from '../../../Components/calendario/calendario.js';


function SolicitacaoManutencao() {
  const [tipoPatrimonio, setTipoPatrimonio] = useState("");
  const [sala, setSala] = useState("");
  const [nSala, setNsala] = useState("")
  const [nPatrimonio, setNpatrimonio] = useState("");
  const [data, setData] = useState("");
  const [fixedAssent, setFixedAssent] = useState("");
  const [loading, setLoading] = useState("");

  
  const validate = () => {
    if (!tipoPatrimonio && !sala && !nPatrimonio && !fixedAssent) {
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
    if (!tipoPatrimonio) {
      toast.warn("Selecione o tipo de patrimonio", {
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
    if (!sala) {
      toast.warn("Selecione a sala", {
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
    if (!nPatrimonio) {
      toast.warn("Insira o número de patrimonio", {
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
    // if (!data) {
    //   toast.warn("Insira a data", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   return false;
    // }
    if (!fixedAssent) {
      toast.warn("Descreva o problema", {
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

  const tryRequest = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);

        const data = { tipoPatrimonio, sala, nSala ,nPatrimonio, fixedAssent, data };
        await api.post("/reqMaintanance", data);

        toast.success("Solicitação enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoading("");
        setTipoPatrimonio("");
        setSala("");
        setNsala("");
        setNpatrimonio("");
        setFixedAssent("");
        setData("")

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
  };



  return (
    <div className="container-sol-manuntencao">
      <Sidebar />

      <section className="form-sol-manutencao">
        <form className="form-man">
          <section className="section-manutencao">
            <div className="wrap-input">
              <select
                name="select"
                className={tipoPatrimonio !== "" ? "has-val input" : "input"}
                type="text"
                value={tipoPatrimonio}
                onChange={(e) => setTipoPatrimonio(e.target.value)}
              >
                <option value="" disable selected></option>
                {patrimoniosData.map((item, index) => {
                  return <option value={item.value}>{item.title}</option>;
                })}
              </select>
              <span
                className="focus-input"
                data-placeholder="Tipo de Patrimonio"
              ></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={sala !== "" ? "has-val input" : "input"}
                type="text"
                value={sala}
                onChange={(e) => setSala(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Sala de aula</option>
                <option value="2">Lab de informática</option>
                <option value="3">Lab de Eletro</option>
              </select>
              <span className="focus-input" data-placeholder="Sala"></span>
            </div>

            <div className="wrap-input">
              <input
                className={nSala !== "" ? "has-val input" : "input"}
                type="text"
                value={nSala}
                onChange={(e) =>
                  setNsala(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero da sala"></span>
            </div>

            <div className="wrap-input">
              <input
                className={nPatrimonio !== "" ? "has-val input" : "input"}
                type="number"
                value={nPatrimonio}
                onChange={(e) => setNpatrimonio(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Numero de Patrimonio"
              ></span>
            </div>


            <div className='flex-center'>
              <DatePick
                className={data !== "" ? "has-val input" : "input"}
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <span className="focus-input" data-placeholder=""></span>
            </div>
          </section>

          <section className="section-manutencao">
            <label>Descrição do Problema</label>
            <textarea
              name="descricao-problema"
              id="descricao-problema"
              cols="20"
              rows="7"
              value={fixedAssent}
              onChange={(e) => setFixedAssent(e.target.value)}
            ></textarea>
          </section>
          <div className="loading">{loading}</div>
          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={tryRequest}>
              Enviar
            </button>
          </section>
        </form>
        <ToastContainer />
      </section>
    </div>
  );
}

export default SolicitacaoManutencao;
