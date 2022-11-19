import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
    alert(data.message);
    // console.log(data.message)
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
      alert(`Não foi possível deletar. \nErro: ${err}`)
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalIsopen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Aceite de requisições</h2>
        <form>
          <button type="submit" name="action" onClick={handleSubmit}>Aceitar</button>
          <button type="submit" name="action" onClick={handleDelete}>Negar</button>
          <button onClick={() => { window.location.reload(true) }}>Cancelar</button>
        </form >
      </Modal >
    </div >
  )
}

export default Index;