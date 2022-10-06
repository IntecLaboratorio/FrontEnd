import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../Service/api.js';

import './style.css'

function Manutencao() {

  const [nome, setNome] = useState("");
  const [nserie, setNserie] = useState("");
  const [statusManutencao, setstatusManutencao] = useState("");
  const [floor_lab, setFloor_lab] = useState("");
  const [fixedAssent, setFixedAssent] = useState([]);

  useEffect(() => {
    async function getfixedAssent() {
      const { data } = await api.get('/fixedAssent');
      setFixedAssent(data)
      console.log(data)
    }
    getfixedAssent();
  }, []);

  return (
    <div className='container-manuntencao'>
      <section floor_labName="container-cadastro secoes">
        <table className="table table-striped table-bordered table-hover">
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th colSpan={4}>Lista de Patrimônios</th>
            </tr>
            <tr>
              <th>Id</th>
              <th>Nome do Patrimônio</th>
              <th>Status do Patrimônio</th>
              <th>Número do laboratório</th>
            </tr>
          </thead>
          <tbody>
            {fixedAssent.map((fixedAssent) => (
              <tr key={fixedAssent.id}>
                <td> {fixedAssent.id} </td>
                <td> {fixedAssent.assent_name} </td>
                <td> {fixedAssent.verify} </td>
                <td> {fixedAssent.fk_labs} </td>
              </tr>
            ))
            }

          </tbody>
        </table>
      </section>

      <h3 className='title'>LEGENDA DE STATUS</h3>
      <div className='radius'>
        <p className='ativo'></p><p className='text-status'>Ativo</p>
        <p className='manutencao'></p><p className='text-status'>Manutenção</p>
        <p className='inativo'></p><p className='text-status'>Inativo</p>
      </div>
      
      <section className="form-manutencao">
        <form className='form-man'>
          <section className='section-manutencao'>
          <div className="wrap-input">
              <select name="select"
                className={nome !== "" ? "has-val input" : "input"}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Monitor</option>
                <option value="2">Mouse</option>
                <option value="3">Teclado</option>
              </select>
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={nserie !== "" ? "has-val input" : "input"}
                type="text"
                value={nserie}
                onChange={(e) => setNserie(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero de Série"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={statusManutencao !== "" ? "has-val input" : "input"}
                type="text"
                value={statusManutencao}
                onChange={(e) => setstatusManutencao(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
                <option value="3">Manutenção</option>
              </select>
              <span className="focus-input" data-placeholder="Status da Manutenção"></span>
            </div>

          </section>
          <section className='section-manutencao'>
            <label>Descrição do Problema</label>
            <textarea name="descricao-problema" id="descricao-problema" cols="20" rows="7"></textarea>
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn">Deletar</button>
            <button className="btn btn-planilhas">Alterar</button>
          </section>
        </form>
      </section>
    </div>
  )
}

export default Manutencao;