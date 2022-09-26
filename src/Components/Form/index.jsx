import React, { useState } from 'react';
import './Style.css';

function Index(props) {
  return (
    <div className='form-container'>
      <form className='d-flex-column' action="get">
        {props.interruptor == false ?
          <>
            <label htmlFor="disciplina">Disciplina</label>
            <select name="disciplina" id="disciplina">
              <option value="selecione">Selecione</option>
            </select>
          </> : <div></div>}
        <label htmlFor="turma">Turma</label>
        <select name="turma" id="turma">
          <option value="selecione">Selecione</option>
        </select>
        {props.interruptor == false ?
          <>
            <label htmlFor="bloco">Bloco</label>
            <select name="bloco" id="bloco">
              <option value="selecione">Selecione</option>
            </select>
          </> : <div></div>}
        <label htmlFor="periodo">Período</label>
        <select name="periodo" id="periodo">
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