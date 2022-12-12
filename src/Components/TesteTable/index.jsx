import { CTable } from "@coreui/react";
import './style.css'
import api from '../../Service/api.js';
import { useEffect, useState } from "react";
import ModalAceite from '../ModalAceite/index.js';
import Sidebar from '../Sidebar/sidebar.js';
import { formatDate } from '../../Utils/formatDate.js';
import axios from "axios";


function Table() {

  const [reqLabs, setReqLabs] = useState([]);
  const [aceiteItem, setAceiteItem] = useState('');
  const [loadModalAceite, setLoadModalAceite] = useState(false);
  const [status_reqlab, setStatus_reqlab] = useState(1);
  const [search, setSearch] = useState("");

  function showModalAceite(aceite) {
    setLoadModalAceite(true);
    setAceiteItem(aceite);
  }

  useEffect(() => {
    async function findReqLabs() {
      const { data } = await api.get(`/reqLabs/${status_reqlab}`);
      setReqLabs(data)
    }
    findReqLabs();
  }, [status_reqlab]);

  return (
    <>
      <Sidebar></Sidebar>
      {loadModalAceite && <ModalAceite isOpen={loadModalAceite} dataAceite={aceiteItem} />}

      <div className="filtros">
        <div className="wrap-input-pagination">
          <input
            className={search !== "" ? "has-val input" : "input"}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Pesquisar Solicitação"></span>
        </div>

        <select
          name="select"
          type="text"
          value={status_reqlab}
          onChange={(e) =>
            setStatus_reqlab(e.target.value)}
        >
          <option value="1" selected>Aberto</option>
          <option value="2">Aceito</option>
          <option value="3">Negado</option>
          <option value="0">Todas</option>
        </select>
      </div>


      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="top">Diciplina</th>
            <th className="top">Laboratório</th>
            <th className="top">Bloco de Aula</th>
            <th className="top">Período</th>
            <th className="top">Data da Requisição</th>
            <th className="top">Status da solicitação</th>
            <th className="top"></th>
          </tr>
        </thead>

        <tbody>
          {
            reqLabs.length == 0 ? <td colSpan={5}>Não há dados</td> :
              reqLabs.filter((val) => {
                if (search == "") {
                  return val
                } else if (val.lab.toUpperCase().includes(search.toUpperCase())) {
                  return val
                }
              }).map((reqLab) => (
                <tr key={reqLab.id}>
                  <td>{reqLab.fk_discipline}</td>
                  <td>{reqLab.lab}</td>
                  <td>{reqLab.bloco_aula}</td>
                  <td>{reqLab.periodo}</td>
                  <td>{formatDate(reqLab.data_req)}</td>
                  <td>{reqLab.fk_status_reqLab}</td>
                  <td>
                  {(sessionStorage.getItem("typeUser") == 1) || (sessionStorage.getItem("typeUser") == 2) ? <button className="btn-accept" onClick={() => showModalAceite(reqLab)}>Selecionar</button>  : null}
                  </td>
                </tr>
              ))
          }
        </tbody>

      </table>

    </>
  )
}

export default Table;