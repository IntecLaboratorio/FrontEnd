import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import api from '../../Service/api.js';

import './style.css'

function Manutencao() {

  const [nome, setNome] = useState("");
  const [nserie, setNserie] = useState("");
  const [statusManutencao, setstatusManutencao] = useState("");
  const [floor_lab, setFloor_lab] = useState("");
  const [fixedAssent, setFixedAssent] = useState([]);

  useEffect(() => {
    async function getFixedAssent() {
      const { data } = await api.get('/fixedAssent');
      setFixedAssent(data)
      console.log(data)
    }
    getFixedAssent();
  }, [fixedAssent]);

  const products =
    fixedAssent.map((fixedAssent) => (
      { id: parseInt(`${fixedAssent.id}`), name: `${fixedAssent.assent_name}`, verify: `(${fixedAssent.verify})`, fk_labs: `${fixedAssent.fk_labs}` }
    ));

  // console.log(products)

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Nome", sort: true },
    { dataField: "verify", text: "Status do patrimônio", sort: true },
    { dataField: "fk_labs", text: "Laboratório", sort: true }
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc"
    }
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  });
  return (
    <div className='container-manuntencao'>
      <section className="table-pagination">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
      </section >

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
    </div >
  )
}

export default Manutencao;