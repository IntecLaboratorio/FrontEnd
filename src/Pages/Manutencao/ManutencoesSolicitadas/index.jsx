import { CTable } from "@coreui/react";
import api from '../../../Service/api.js';
import { useEffect, useState } from "react";
import ModalAceite from '../../../Components/ModalAceite/aceiteMan.js';
import Sidebar from '../../../Components/Sidebar/sidebar.js';
import { formatDate } from '../../../Utils/formatDate.js';
import axios from "axios";


function Table() {

  const [reqManutencoes, setReqManutencoes] = useState([]);
  const [aceiteItem, setAceiteItem] = useState('');
  const [loadModalAceite, setLoadModalAceite] = useState(false);

  function showModalAceite(aceite) {
    setLoadModalAceite(true);
    setAceiteItem(aceite);
  }

  useEffect(() => {
    async function BuscaManutencao() {
      const { data } = await api.get('/reqMaintanance');
      setReqManutencoes(data)
      console.log(data)
    }
    BuscaManutencao();
  }, [reqManutencoes]);

  return (
    <>
      <Sidebar></Sidebar>
      {loadModalAceite && <ModalAceite isOpen={loadModalAceite} dataAceite={aceiteItem} />}

      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="top">Tipo de Patrimônio</th>
            <th className="top">Sala</th>
            <th className="top">Número da sala</th>
            <th className="top">Número do pratrimônio</th>
            <th className="top">Observação</th>
            <th className="top"></th>
          </tr>
        </thead>

        <tbody>
          {
            reqManutencoes.length == 0 ? <td colSpan={6}>Não há dados</td> :
            reqManutencoes.map((reqManutencao) => (
              <tr key={reqManutencao.id}>
                <td>{reqManutencao.room}</td>
                <td>{reqManutencao.num_room}</td>
                <td>{reqManutencao.num_assent}</td>
                <td>{ formatDate(reqManutencao.requerement_date)}</td>
                <td>{reqManutencao.observation}</td>
                <td>
                  <button className="btn-accept" onClick={() => showModalAceite(reqManutencao)}>Selecionar</button>
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