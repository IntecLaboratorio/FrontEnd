import React, { useEffect, useState } from "react";
import api from "../../Service/api.js";
import { ToastContainer, toast } from "react-toastify";
import Table from 'react-bootstrap/Table';
import './style.css'
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import Sidebar from '../../Components/Sidebar/sidebar.js'

function Index(props) {
  const [fk_discipline, setfk_discipline] = useState("");
  const [lab, setLab] = useState("");
  // const [turma, setTurma] = useState("");
  const [bloco_aula, setBloco_aula] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [data_req, setData_req] = useState("");
  const user_req = sessionStorage.getItem('userName');
  const [loading, setLoading] = useState("");
  const [diciplinadb, setDiciplinadb] = useState([]);

  useEffect(() => {
    async function findCourses() {
      const { data } = await api.get('/schoolSubject');
      setDiciplinadb(data)
      console.log(data)
    }
    findCourses();
  }, [diciplinadb]);

  console.log(`diciplina: ${fk_discipline}, bloco: ${bloco_aula}, periodo: ${periodo}, data: ${data_req} `)

  const validate = () => {
    if (!fk_discipline && !bloco_aula && !periodo && !data_req) {
      toast.warn("Preencha todos os campos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if(!fk_discipline){
      toast.warn("Informe a disciplina!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if(!bloco_aula){
      toast.warn("Informe o bloco da aula!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if(!periodo){
      toast.warn("Informe o periodo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if(!data_req){
      toast.warn("Informe a data!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    return true;
  };

  const validateDate = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);

        const dataReq = { data_req, periodo, bloco_aula };
        await api.post("/validateData", dataReq);

        insertSolicitacao();
      }
      catch (err) {
        setLoading("");
        setData_req("");
        console.log(err);
        toast.error("Este horario já esta sendo utilizado!", {
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

  async function insertSolicitacao() {

    try {
      setLoading(<Spinner id="loading" animation="border" />);

      const data = { fk_discipline, lab, bloco_aula, periodo, data_req, user_req };
      console.log(data)

      await api.post("/reqLabs", data);

      toast.success("Sua Solicitacao foi cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setLoading("");
    } catch (err) {
      setLoading("");
      console.log(err);
      toast.error("Não foi possível concluir o cadastro", {
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
  return (
    <>
      <Sidebar></Sidebar>

      <div className="container-cadastro secoes">
        <form className="form-cadastro">
          <section className="section-cadastro justify-center-mobile-user">
            <div className="wrap-input">
              <select
                name="select"
                className={fk_discipline !== "" ? "has-val input" : "input"}
                type="text"
                value={fk_discipline}
                onChange={(e) => setfk_discipline(e.target.value)}
              >
                <option value="" disable selected></option>
                {
                  diciplinadb.map((diciplinas) => (
                    <option value={diciplinas.id}>{diciplinas.name_school_subjetc}</option>
                  ))
                }
              </select>
              <span className="focus-input" data-placeholder="Disciplina"></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={lab !== "" ? "has-val input" : "input"}
                type="text"
                value={lab}
                onChange={(e) => setLab(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Lab. informática 01">Lab. informática 01</option>
                <option value="Lab. informática 02">Lab. informática 02</option>
                <option value="Lab. informática 03">Lab. informática 03</option>
                <option value="Lab. informática 04">Lab. informática 04</option>
                <option value="Lab. informática 05">Lab. informática 05</option>
                <option value="Lab. informática 06">Lab. informática 06</option>
                <option value="Lab. informática 07">Lab. informática 07</option>
              </select>
              <span className="focus-input" data-placeholder="Laboratório"></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={bloco_aula !== "" ? "has-val input" : "input"}
                type="text"
                value={bloco_aula}
                onChange={(e) => setBloco_aula(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Primeiro Bloco">Primeiro Bloco</option>
                <option value="Segundo Bloco">Segundo Bloco</option>
              </select>
              <span className="focus-input" data-placeholder="Bloco"></span>
            </div>
          </section>
          <section className="section-cadastro justify-center-mobile-user">
            <div className="wrap-input">
              <select
                name="select"
                className={periodo !== "" ? "has-val input" : "input"}
                type="text"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
              </select>
              <span className="focus-input" data-placeholder="Periodo"></span>
            </div>

            <div className="wrap-input">
              <input
                className={data_req !== "" ? "has-val input" : "input"}
                type="date"
                value={data_req}
                onChange={(e) => setData_req(e.target.value)}
              />
              <span
                className="focus-input"
              ></span>
            </div>

          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={validateDate}>
              Confirmar
            </button>
          </section>
          <div className="loading">{loading}</div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Index;