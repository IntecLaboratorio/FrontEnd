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

  function showModalAceite(aceite) {
    setLoadModalAceite(true);
    setAceiteItem(aceite);
  }

  useEffect(() => {
    async function findReqLabs() {
      const { data } = await api.get('/aceite');
      setReqLabs(data)
      console.log(data)
    }
    findReqLabs();
  }, [reqLabs]);

  return (
    <>
      <Sidebar></Sidebar>
      {loadModalAceite && <ModalAceite isOpen={loadModalAceite} dataAceite={aceiteItem} />}

      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="top">Diciplina</th>
            <th className="top">Bloco de Aula</th>
            <th className="top">Período</th>
            <th className="top">Data da Requisição</th>
            <th className="top"></th>
          </tr>
        </thead>

        <tbody>
          {
            reqLabs.length == 0 ? <td colSpan={5}>Não há dados</td> :
            reqLabs.map((reqLab) => (
              <tr key={reqLab.id}>
                <td>{reqLab.fk_discipline}</td>
                <td>{reqLab.bloco_aula}</td>
                <td>{reqLab.periodo}</td>
                <td>{ formatDate(reqLab.data_req)}</td>
                <td>
                  <button className="btn-accept" onClick={() => showModalAceite(reqLab)}>Selecionar</button>
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