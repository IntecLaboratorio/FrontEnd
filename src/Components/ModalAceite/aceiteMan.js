import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../Service/api.js";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#0E1427',
    color: '#EFEFEF'
  },
};

function Index({ isOpen, dataAceite }) {
  const [modalIsopen, setIsopen] = useState(isOpen);
  const [status_manutencaodb, setStatus_manutencaodb] = useState([]);
  const [whatWasDone, setWhatWasDone] = useState("");
  const [status_manutencao, setStatus_manutencao] = useState("");
  const user_fin = sessionStorage.getItem('userName');
  const [loading, setLoading] = useState("");

  // console.log(user_fin, whatWasDone, status_manutencao)
  useEffect(() => {
    async function findStatus() {
      const { data } = await api.get('/status_manutencao');
      setStatus_manutencaodb(data)
      console.log(data)
    }
    findStatus();
  }, [status_manutencaodb]);

  function closeModal() {
    setIsopen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const AceiteData = {
      "user_fin": user_fin,
      "whatWasDone": whatWasDone,
      "status_manutencao": status_manutencao,
      "id": dataAceite.id,
    }
    try {
      const { data } = await axios.put('http://localhost:3334/reqMaintanance', AceiteData);
      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      window.location.reload(true);
    } catch (err) {
      setLoading("");
      console.log(err);
      toast.error("Não foi possível atualizar o status de manutenção", {
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
    <div>
      <Modal
        isOpen={modalIsopen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* user_fin, whatWasDone, fk_status_manutencao */}
        <h2 className="title-modal">Atualizar a solicitação</h2>
        <form className="form-modal form-modal-manutencao">
          <section>
            <div className="wrap-input">
              <input
                className={whatWasDone !== "" ? "has-val input" : "input"}
                type="text"
                value={whatWasDone}
                onChange={(e) =>
                  setWhatWasDone(e.target.value)}
              />
              <span className="focus-input" data-placeholder="O que foi feito?"></span>
            </div>
            <div className="wrap-input">
              <select
                name="select"
                className={status_manutencao !== "" ? "has-val input" : "input"}
                type="text"
                value={status_manutencao}
                onChange={(e) => setStatus_manutencao(e.target.value)}
              >
                <option value="" disable selected></option>
                {
                  status_manutencaodb.map((status_manutencaodb) => (
                    <option value={status_manutencaodb.id}>{status_manutencaodb.status_manutencao}</option>
                  ))
                }
              </select>
              <span className="focus-input" data-placeholder="Status da Manutenção"></span>
            </div>
          </section>
          <button type="submit" name="action" onClick={handleSubmit}>Atualizar</button>
          <button onClick={() => { window.location.reload(true) }}>Cancelar</button>
        </form >
      </Modal >
      <ToastContainer />
    </div >
  )
}

export default Index;