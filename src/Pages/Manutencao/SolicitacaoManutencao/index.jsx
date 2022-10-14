import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { patrimoniosData } from './patrimoniosData.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import api from '../../../Service/api.js';
import { Spinner } from 'react-bootstrap';

function SolicitacaoManutencao() {

  const [tipoPatrimonio, setTipoPatrimonio] = useState("");
  const [sala, setSala] = useState("");
  const [nPatrimonio, setNpatrimonio] = useState("");
  const [fixedAssent, setFixedAssent] = useState("");
  const [loading, setLoading] = useState("");

  const validate = () => {
    let errors = {};

    if (!tipoPatrimonio) {
      errors.tipoPatrimonio = toast.warn("Informe o tipo de patrimônio", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!sala) {
      errors.sala = toast.warn("Informe a sala", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!nPatrimonio) {
      errors.nPatrimonio = toast.warn("Informe o número de patrimônio", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!fixedAssent) {
      errors.fixedAssent = toast.warn("Descreva o problema do equipamento", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (errors.tipoPatrimonio || errors.sala || errors.nPatrimonio || errors.fixedAssent) {
      return false;
    }
    return true;
  }

  const tryRequest = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation='border' />);

        const data = { tipoPatrimonio, sala, nPatrimonio, fixedAssent }
        await api.post('/reqMaintanance', data);

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
        setNpatrimonio("");
        setFixedAssent("");
      }
      catch (err) {
        console.log(err);
        setLoading("");
        toast.error("Não foi possivel realizar sua solicitação!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }

  return (
    <div className='container-manuntencao'>

      <section className="form-manutencao">
        <form className='form-man'>

          <section className='section-manutencao'>

            <div className="wrap-input">
              <select name="select"
                className={tipoPatrimonio !== "" ? "has-val input" : "input"}
                type="text"
                value={tipoPatrimonio}
                onChange={(e) => setTipoPatrimonio(e.target.value)}
              >
                <option value="" disable selected></option>
                {patrimoniosData.map((item, index) => {
                  return (
                    <option value={item.value}>{item.title}</option>
                  );
                })}
              </select>
              <span className="focus-input" data-placeholder="Tipo de Patrimonio"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={sala !== "" ? "has-val input" : "input"}
                type="text"
                value={sala}
                onChange={(e) => setSala(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
                <option value="3">Manutenção</option>
              </select>
              <span className="focus-input" data-placeholder="Sala"></span>
            </div>

            <div className="wrap-input">
              <input
                className={nPatrimonio !== "" ? "has-val input" : "input"}
                type="text"
                value={nPatrimonio}
                onChange={(e) => setNpatrimonio(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero de Patrimonio"></span>
            </div>
          </section>

          <section className='section-manutencao'>
            <label>Descrição do Problema</label>
            <textarea name="descricao-problema"
              id="descricao-problema"
              cols="20"
              rows="7"
              value={fixedAssent}
              onChange={(e) => setFixedAssent(e.target.value)}
            ></textarea>
          </section>
          <div className='loading'>{loading}</div>
          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={tryRequest}>Enviar</button>
          </section>

        </form>
      </section>
    </div >
  )
}

export default SolicitacaoManutencao;