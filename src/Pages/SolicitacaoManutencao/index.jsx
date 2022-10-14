import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {patrimoniosData} from './patrimoniosData.js'
import './style.css'

function SolicitacaoManutencao() {

  const [tipoPatrimonio, setTipoPatrimonio] = useState("");
  const [sala, setSala] = useState("");
  const [nPatrimonio, setNpatrimonio] = useState("");
  const [fixedAssent, setFixedAssent] = useState([]);

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

                {patrimoniosData.map((item,index) => {
                  return(
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
                {patrimoniosData.map}
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
            <textarea name="descricao-problema" id="descricao-problema" cols="20" rows="7"></textarea>
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn">Enviar</button>
          </section>
          
        </form>
      </section>
    </div >
  )
}

export default SolicitacaoManutencao;