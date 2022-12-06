import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  console.log(dataAceite);
  function closeModal() {
    setIsopen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Evita que o formulario envie o dado e recarregue a página

    const AceiteData = {
      "id": dataAceite.id,
    }

    const { data } = await axios.put('http://localhost:3334/aceite', AceiteData);
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
  }

  async function handleDelete() {

    const AceiteData = {
      "id": dataAceite.id
    }

    try {
      await axios.delete(`http://localhost:3334/reqLabs/${dataAceite.id}`);
      window.location.reload(true);
    } catch (err) {
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

  return (
    <div>
      <Modal
        isOpen={modalIsopen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="title-modal">Aceite de requisições</h2>
        <form className="form-modal">
          <button type="submit" name="action" onClick={handleSubmit}>Aceitar</button>
          <button type="submit" name="action" onClick={handleDelete}>Negar</button>
          <button onClick={() => { window.location.reload(true) }}>Cancelar</button>
        </form >
      </Modal >
      <ToastContainer />
    </div >
  )
}

export default Index;