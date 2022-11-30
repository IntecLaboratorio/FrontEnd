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

  async function handleDelete() {

    const AceiteData = {
      "id": dataAceite.id
    }

    try {
      await axios.delete(`http://localhost:3334/reqMaintanance/${dataAceite.id}`);
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
        <h2 className="title-modal">A Manutenção já foi realizada?</h2>
        <form className="form-modal">
          <button type="submit" name="action" onClick={handleDelete}>Sim</button>
          <button onClick={() => { window.location.reload(true) }}>Cancelar</button>
        </form >
      </Modal >
    </div >
  )
}

export default Index;