import React, { useState } from 'react';
import api from "../../Service/api.js"
import './Style.css';

function Index(props) {

  const [disciplina, setDisciplina] = useState("");
  const [turma, setTurma] = useState("");
  const [bloco, setBloco] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [date, setDate] = useState("");
  const [horario, setHorario] = useState("");


  async function insertCronograma() {
    try {
      const data = { disciplina, turma, bloco, periodo, date, horario }

      await api.post('/cronograma', data);

      alert("Seu cronograma foi cadastrado com sucesso!")

    } catch (err) {
      alert(`Houve um problema: ${err}`)
    }
  }
  return (
    <div className='form-container'>
      <form className='d-flex-column' action="get">
        {props.interruptor == false ?
          <>
            <label htmlFor="disciplina">Disciplina</label>
            <select name="disciplina" id="disciplina"
              className={disciplina !== "" ? "has-val input" : "input"}
              type="text"
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
            >
              <option value="selecione">Selecione</option>
            </select>
          </> : <div></div>}

        <label htmlFor="turma">Turma</label>
        <select name="turma" id="turma"
          className={turma !== "" ? "has-val input" : "input"}
          type="text"
          value={turma}
          onChange={(e) => setTurma(e.target.value)}>
          <option value="selecione">Selecione</option>
        </select>

        {props.interruptor == false ?
          <>
            <label htmlFor="bloco">Bloco</label>
            <select name="bloco" id="bloco"
              className={bloco !== "" ? "has-val input" : "input"}
              type="text"
              value={bloco}
              onChange={(e) => setBloco(e.target.value)}>
              <option value="selecione">Selecione</option>
            </select>
          </> : <div></div>}

        <label htmlFor="periodo">Período</label>
        <select name="periodo" id="periodo"
          className={periodo !== "" ? "has-val input" : "input"}
          type="text"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}>
          <option value="selecione">Selecione</option>
        </select>

        <section className='d-flex'>
          <div>
            <label htmlFor="data">Data</label>
            <input type="date" htmlFor="data" />
          </div>

          <div className='horario'>
            <label htmlFor="horario">Horário</label>
            <input type="time" />
          </div>
        </section>

        {props.interruptor == true ?
          <section>
            <input type="radio" className='termos-uso' name="termos-uso" id="termos-uso" />
            <label htmlFor='termos-uso'>Eu aceito os termos de uso</label>
          </section> : <></>}

        <button>Solicitar Agendamento</button>
      </form>
    </div>
  );
}

export default Index;


{/* <select name="select"
                className={verify !== "" ? "has-val input" : "input"}
                type="text"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select> */}