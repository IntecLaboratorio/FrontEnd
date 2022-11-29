import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { patrimoniosData } from './patrimoniosData.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import api from '../../../Service/api.js';
import { Spinner } from 'react-bootstrap';
import Sidebar from '../../../Components/Sidebar/sidebar.js'
// import DatePick from '../../../Components/calendario/calendario.js';



function SolicitacaoManutencao() {
  const [type_assent, settype_Assent] = useState("");
  const [room, setRoom] = useState("");
  const [num_room, setNum_room] = useState("");
  const [num_assent, setNum_assent] = useState("");
  const [requerement_date, setRequerement_date] = useState("");
  const [observation, setObservation] = useState("")
  // const [num_assent, setFixedAssent] = useState("");
  const [loading, setLoading] = useState("");

  const validate = () => {
    if (!type_assent && !room && !num_room && !num_assent && !requerement_date && !observation) {
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
    if (!type_assent) {
      toast.warn("Selecione o tipo de patrimonio", {
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
    if (!room) {
      toast.warn("Selecione a sala", {
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
    if (!num_room) {
      toast.warn("Insira o número da sala ou laboratório", {
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
    if (!requerement_date) {
      toast.warn("Insira a data", {
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
    if (!num_assent) {
      toast.warn("Insira o número do patrimonio", {
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
    if (!observation) {
      toast.warn("Descreva o problema", {
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

  const tryRequest = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("dentro da função " + requerement_date)
      try {
        setLoading(<Spinner id="loading" animation="border" />);

        const data = { type_assent, room, num_room, num_assent, requerement_date,  };
        await api.post("/reqMaintanance", data);

        toast.success("Solicitação enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoading("");
        settype_Assent("");
        setRoom("");
        setNum_room("");
        // setNum_room("");
        setNum_assent("");
        setRequerement_date("");
        setObservation("")

      } catch (err) {
        setLoading("");
        toast.error(`Houve um problema: ${err}`, {
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
  };



  return (
    <div className="container-sol-manuntencao">
      <Sidebar />

      <section className="form-sol-manutencao">
        <form className="form-man">
          <section className="section-manutencao">
            <div className="wrap-input">
              <select
                name="select"
                className={type_assent !== "" ? "has-val input" : "input"}
                type="text"
                value={type_assent}
                onChange={(e) => settype_Assent(e.target.value)}
              >
                <option value="" disable selected></option>
                {patrimoniosData.map((item, index) => {
                  return <option value={item.value}>{item.title}</option>;
                })}
              </select>
              <span
                className="focus-input"
                data-placeholder="Tipo de Patrimonio"
              ></span>
            </div>

            <div className="wrap-input">
              <select
                name="select"
                className={room !== "" ? "has-val input" : "input"}
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="1">Sala de aula</option>
                <option value="2">Lab de informática</option>
                <option value="3">Lab de Eletro</option>
              </select>
              <span className="focus-input" data-placeholder="Sala"></span>
            </div>

            <div className="wrap-input">
              <input
                className={num_room !== "" ? "has-val input" : "input"}
                type="text"
                value={num_room}
                onChange={(e) =>
                  setNum_room(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero da sala"></span>
            </div>

            <div className="wrap-input">
              <input
                className={num_assent !== "" ? "has-val input" : "input"}
                type="number"
                value={num_assent}
                onChange={(e) => setNum_assent(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Numero de Patrimonio"
              ></span>
            </div>


            <div className='flex-center'>
              <input type='date' 
              value={requerement_date} 
              onChange={(e) => setRequerement_date(e.target.value)}
              />
                  
              <span className="focus-input" data-placeholder=""></span>
            </div>
          </section>

          <section className="section-manutencao">
            <label>Descrição do Problema</label>
            <textarea
              name="descricao-problema"
              id="descricao-problema"
              cols="20"
              rows="7"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            ></textarea>
          </section>
          <div className="loading">{loading}</div>
          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={tryRequest}>
              Enviar
            </button>
          </section>
        </form>
        <ToastContainer />
      </section>
    </div>
  );
}

export default SolicitacaoManutencao;
