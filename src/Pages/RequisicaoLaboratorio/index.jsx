import React, { useEffect, useState } from "react";
import api from "../../Service/api.js";
import { ToastContainer, toast } from "react-toastify";
import Table from 'react-bootstrap/Table';
import './style.css'
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import Sidebar from '../../Components/Sidebar/sidebar.js'

function Index(props) {
  const [discipline, setDiscipline] = useState("");
  // const [turma, setTurma] = useState("");
  const [bloco_aula, setBloco_aula] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [data_req, setData_req] = useState("");
  const [loading, setLoading] = useState("");
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function findCourses() {
      const { data } = await api.get('/courses');
      setCursos(data)
      console.log(data)
    }
    findCourses();
  }, [cursos]);

  console.log(`diciplina: ${discipline}, bloco: ${bloco_aula}, periodo: ${periodo}, data: ${data_req} `)
  const validate = () => {
    let errors = {};

    if (!discipline || !bloco_aula || !periodo || !data_req) {
      errors.inputs = toast.warn("Preencha todos os campos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (errors.inputs) {
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

      const data = { discipline, bloco_aula, periodo, data_req };
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
                className={discipline !== "" ? "has-val input" : "input"}
                type="text"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
              >
                <option value="" disable selected></option>
                {
                  cursos.map((curso) => (
                    <option value={curso.id}>{curso.name_course}</option>
                  ))
                }
              </select>
              <span className="focus-input" data-placeholder="Discipline"></span>
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