import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../Service/api.js';

import './style.css'

function Manutencao() {

  const [fk_instruction, setFk_instruction] = useState("");
  const [name_lab, setName_lab] = useState("");
  const [room_index, setRoom_index] = useState("");
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
        <form>
          <section className='section-manutencao'>
            <label>Nome</label>
            <select name="select">
              <option value="0" selected></option>
              <option value="monitor">Monitor</option>
              <option value="mouse">Mouse</option>
              <option value="teclado">Teclado</option>
            </select>
            <label>Número de Série</label>
            <input type='text' />
            <label>Status da Manutenção</label>
            <select name="select" id='select'>
              <option value="0" selected></option>
              <option value="dfbg">Ativo</option>
              <option value="bfdz">Manutenção</option>
              <option value="saqws">Inativo</option>
            </select>
          </section>
          <section className='section-manutencao'>
            <label>Descrição do Problema</label>
            <textarea name="descricao-problema" id="descricao-problema" cols="20" rows="7"></textarea>
          </section>
        </form>
      </section>
      <div className="buttons-manutencao">
        <button>Alterar</button>
        <button>Deletar</button>
      </div>
    </div>
  )
}

export default Manutencao;