import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../Service/api.js"

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
  const [status_reqlabdb, setStatus_reqlabdb] = useState([]);
  const [status_reqlab, setStatus_reqlab] = useState("");
  const user_fin = sessionStorage.getItem('userName');
  const [loading, setLoading] = useState("");

  // console.log(user_fin, whatWasDone, status_reqlab)
  useEffect(() => {
    async function findStatus() {
      const { data } = await api.get('/statusReqlab');
      setStatus_reqlabdb(data)
      console.log(data)
    }
    findStatus();
  }, [status_reqlabdb]);

  function closeModal() {
    setIsopen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const AceiteData = {
      "user_fin": user_fin,
      "status_reqLab": status_reqlab,
      "id": dataAceite.id,
    }
    try {
      const { data } = await axios.put('http://localhost:3334/reqLabs', AceiteData);
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
      toast.error("Não foi possível atualizar o status de solicitação",{
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

        <h2 className="title-modal">Atualizar a solicitação</h2>
        <form className="form-modal form-modal-reqlab">
          <section>
            <div className="wrap-input">
              <select
                name="select"
                className={status_reqlab !== "" ? "has-val input" : "input"}
                type="text"
                value={status_reqlab}
                onChange={(e) => setStatus_reqlab(e.target.value)}
              >
                <option value="" disable selected></option>
                {
                  status_reqlabdb.map((status_reqlabdb) => (
                    <option value={status_reqlabdb.id}>{status_reqlabdb.status_reqlab}</option>
                  ))
                }
              </select>
              <span className="focus-input" data-placeholder="Status da requisição"></span>
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