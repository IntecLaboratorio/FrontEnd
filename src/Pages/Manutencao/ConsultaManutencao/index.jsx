import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import api from "../../../Service/api.js";
import { patrimoniosData } from "../SolicitacaoManutencao/patrimoniosData.js";
import { ToastContainer, toast } from "react-toastify";

import "./style.css";
import { Spinner } from "react-bootstrap";

function Manutencao() {
  const [nome, setNome] = useState("");
  const [nserie, setNserie] = useState("");
  const [statusManutencao, setstatusManutencao] = useState("");
  const [nPatrimonio, setNpatrimonio] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fixedAssent, setFixedAssent] = useState([]);
  const [loading, setLoading] = useState("");

  function validate() {
    let errors = {};

    if (!nome) {
      errors.nome = toast.warn("Nome é obrigatório!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!nserie) {
      errors.nserie = toast.warn("Número de série é obrigatório!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!statusManutencao) {
      errors.statusManutencao = toast.warn(
        "Status de manutenção é obrigatório!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    if (!nPatrimonio) {
      errors.nPatrimonio = toast.warn("Número do patrimonio é obrigatório!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!descricao) {
      errors.descricao = toast.warn("Descrição é obrigatório!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (
      errors.nome ||
      errors.nserie ||
      errors.statusManutencao ||
      errors.nPatrimonio ||
      errors.descricao
    ) {
      return false;
    }

    return true;
  }

  async function consultLab(e) {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);

        const data = { nome, nserie, statusManutencao, nPatrimonio, descricao };

        toast.success(`Consulta feita com sucesso`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // window.location.reload(true);

        setLoading("");
        setNome("");
        setNserie("");
        setstatusManutencao("");
        setNpatrimonio("");
        setDescricao("");
      } catch (err) {
        // alert(`Houve um problema: ${err}`)
        console.log(err);
        setLoading("");
        toast.error("Não foi possível realizar a consulta", {
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
  }

  useEffect(() => {
    async function getFixedAssent() {
      const { data } = await api.get("/fixedAssent");
      setFixedAssent(data);
      console.log(data);
    }
    getFixedAssent();
  }, [fixedAssent]);

  const products = fixedAssent.map((fixedAssent) => ({
    id: parseInt(`${fixedAssent.id}`),
    name: `${fixedAssent.assent_name}`,
    verify: `(${fixedAssent.verify})`,
    fk_labs: `${fixedAssent.fk_labs}`,
  }));

  // console.log(products)

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Nome", sort: true },
    { dataField: "verify", text: "Status do patrimônio", sort: true },
    { dataField: "fk_labs", text: "Laboratório", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
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
    },
  });
  return (
    <div className="container-manuntencao">
      <section className="table-pagination">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
      </section>

      <div className="radius">
        <p className="ativo"></p>
        <p className="text-status">Ativo</p>
        <p className="manutencao"></p>
        <p className="text-status">Manutenção</p>
        <p className="inativo"></p>
        <p className="text-status">Inativo</p>
      </div>

      {/* <section className="form-manutencao"> */}
      <form className="form-man">
        <section className="wrap-section">
          <section className="wrap-section-manutencao">
            <div className="wrap-input">
              <select
                name="select"
                className={nome !== "" ? "has-val input" : "input"}
                type="text"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              >
                <option value="" disable selected></option>
                {patrimoniosData.map((item, index) => {
                  return <option value={item.value}>{item.title}</option>;
                })}
              </select>
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={nPatrimonio !== "" ? "has-val input" : "input"}
                type="text"
                value={nPatrimonio}
                onChange={(e) => setNpatrimonio(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Numero do Patrimonio"
              ></span>
            </div>
          </section>

          <section className="wrap-section-manutencao">
            <div className="wrap-input">
              <input
                className={nserie !== "" ? "has-val input" : "input"}
                type="text"
                value={nserie}
                onChange={(e) => setNserie(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Numero de Série"
              ></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={statusManutencao !== "" ? "has-val input" : "input"}
                type="text"
                value={statusManutencao}
                onChange={(e) => {
                  setstatusManutencao(e.target.value);
                }}
              >
                <option value="" disable selected></option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
                <option value="3">Manutenção</option>
              </select>
              <span
                className="focus-input"
                data-placeholder="Status da Manutenção"
              ></span>
            </div>
          </section>
        </section>

        <section className="section-manutencao">
          <label>Descrição do Problema</label>
          <textarea
            name="descricao-problema"
            id="descricao-problema"
            cols="20"
            rows="7"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </section>
        <div className='loading'>{loading}</div>
        <section className="section-btn-cadastro section-btn-cadastro--column">
          <button className="btn" onClick={consultLab}>
            Deletar
          </button>
          <button className="btn" onClick={consultLab}>
            Alterar
          </button>
        </section>
      </form>
      {/* </section> */}
    </div>
  );
}

export default Manutencao;
