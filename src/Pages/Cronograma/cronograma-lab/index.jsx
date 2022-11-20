import React, { useState } from "react";
// import api from "../../Service/api.js";
import { ToastContainer, toast } from "react-toastify";
import Table from 'react-bootstrap/Table';
import './style.css'
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import Sidebar from '../../../Components/Sidebar/sidebar.js'

function Index(props) {
  const [disciplina, setDisciplina] = useState("");
  const [turma, setTurma] = useState("");
  const [bloco, setBloco] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [date, setDate] = useState("");
  const [horario, setHorario] = useState("");
  const [pesquisarLab, setPLab] = useState("");
  const [dataLab, setDataLab] = useState("");
  const [loading, setLoading] = useState("");

  const validate = () => {
    let errors = {};

    if (!disciplina || !turma || !bloco || !periodo || !date || !horario) {
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

  async function insertCronograma(e) {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(<Spinner id="loading" animation="border" />);

        const data = { disciplina, turma, bloco, periodo, date, horario };

        // await api.post("/cronograma", data);

        toast.success("Seu cronograma foi cadastrado com sucesso!", {
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
  }
  return (
    <>
      <Sidebar></Sidebar>

      <div className='table-container'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <div className="wrap-input-table">
                  <input
                    className={pesquisarLab !== "" ? "has-val input" : "input-table"}
                    type="text"
                    value={pesquisarLab}
                    onChange={(e) =>
                      setPLab(e.target.value)}
                  />
                  <span className="focus-input-table" data-placeholder="Pesquisar Laboratorio"></span>
                </div>
              </th>

              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>


      <div className="container-cadastro secoes">
        <form className="form-cadastro">
          <section className="section-cadastro justify-center-mobile-user">
            <div className="wrap-input">
              <select
                name="select"
                className={disciplina !== "" ? "has-val input" : "input"}
                type="text"
                value={disciplina}
                onChange={(e) => setDisciplina(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Administração">Administração</option>
                <option value="Contabilidade">Contabilidade</option>
                <option value="Desenvolvimento de Sistemas">
                  Desenvolvimento de Sistemas
                </option>
                <option value="Eletroeletrônica">Eletroeletrônica</option>
                <option value="Logística">Logística</option>
                <option value="Redes de Computadores">
                  Redes de Computadores
                </option>
              </select>
              <span className="focus-input" data-placeholder="Disciplina"></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={turma !== "" ? "has-val input" : "input"}
                type="text"
                value={turma}
                onChange={(e) => setTurma(e.target.value)}
              >
                <option value={""} disable selected></option>
                <option value={"teste"}>teste</option>
              </select>
              <span className="focus-input" data-placeholder="Turma"></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={bloco !== "" ? "has-val input" : "input"}
                type="text"
                value={bloco}
                onChange={(e) => setBloco(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Coordenador">Primeiro Bloco</option>
                <option value="Professor">Segundo Bloco</option>
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
                <option value="Coordenador">Manhã</option>
                <option value="Professor">Tarde</option>
                <option value="Aluno">Noite</option>
              </select>
              <span className="focus-input" data-placeholder="Periodo"></span>
            </div>

            <div className="wrap-input">
              <input
                className={date !== "" ? "has-val input" : "input"}
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Data"
              ></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={horario !== "" ? "has-val input" : "input"}
                type="text"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Horario">Horario</option>
                <option value="Horario">Horario</option>
                <option value="Horario">Horario</option>
              </select>
              <span className="focus-input" data-placeholder="Horario"></span>
            </div>
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn">
              Confirmar
            </button>
            <button className="btn">Recusar</button>
          </section>
          <div className="loading">{loading}</div>
        </form>
        <ToastContainer />
        <div className="loading">{loading}</div>
      </div>
    </>
  );
}

export default Index;