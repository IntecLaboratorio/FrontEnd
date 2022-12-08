import { CTable } from "@coreui/react";
import api from '../../../Service/api.js';
import { useEffect, useState } from "react";
import ModalAceite from '../../../Components/ModalAceite/aceiteMan.js';
import Sidebar from '../../../Components/Sidebar/sidebar.js';
import { formatDate } from '../../../Utils/formatDate.js';
import axios from "axios";


function Table() {

  const [reqManutencoes, setReqManutencoes] = useState([]);
  const [loadModalAceite, setLoadModalAceite] = useState(false);
  const [aceiteItem, setAceiteItem] = useState("");
  const [search, setSearch] = useState("");
  const [status_manutencao, setStatus_manutencao] = useState(1);
  // const [dataInicial, setDataInicial] = useState("");
  // console.log(dataInicial + "É o datas")
  function showModalAceite(aceite) {
    setLoadModalAceite(true);
    setAceiteItem(aceite);
  }

  useEffect(() => {
    async function BuscaManutencao() {
      const { data } = await api.get(`/reqMaintanance/${status_manutencao}`);
      setReqManutencoes(data)
      console.log(data)
    }
    BuscaManutencao();
  }, [status_manutencao]);

  return (
    <>
      <Sidebar></Sidebar>
      {loadModalAceite && <ModalAceite isOpen={loadModalAceite} dataAceite={aceiteItem} />}

      <section className="filtros">
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
          value={status_manutencao}
          onChange={(e) =>
            setStatus_manutencao(e.target.value)}
        >
          <option value="1" selected>Em Manutenção</option>
          <option value="2">Manutenção Realizada</option>
          <option value="0">Todas</option>
        </select>
        {/* <input type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} /> */}
      </section>

      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="top">Tipo de Patrimônio</th>
            <th className="top">Sala</th>
            <th className="top">Número da sala</th>
            <th className="top">Número do pratrimônio</th>
            <th className="top">Observação</th>
            <th className="top">Data de Solicitação</th>
            <th className="top">Solicitado por</th>
            <th className="top">Status de Manutenção</th>
            <th className="top"></th>
          </tr>
        </thead>

        <tbody>
          {
            reqManutencoes.length == 0 ? <td colSpan={6}>Não há dados</td> :
              reqManutencoes.filter((val) => {
                if (search == "") {
                  return val
                } else if (val.type_assent.toUpperCase().includes(search.toUpperCase()) || val.user_req.toUpperCase().includes(search.toUpperCase()) || val.num_assent.toUpperCase().includes(search.toUpperCase())) {
                  return val
                }
              }).map((reqManutencao) => (
                <tr key={reqManutencao.id}>
                  <td>{reqManutencao.type_assent}</td>
                  <td>{reqManutencao.room}</td>
                  <td>{reqManutencao.num_room}</td>
                  <td>{reqManutencao.num_assent}</td>
                  <td>{reqManutencao.observation}</td>
                  <td>{formatDate(reqManutencao.requerement_date)}</td>
                  <td>{reqManutencao.user_req}</td>
                  <td>{reqManutencao.fk_status_manutencao == 1 ? "Em Manutenção" : "Manutenção Realizada"}</td>
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