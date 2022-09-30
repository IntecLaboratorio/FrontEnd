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
    <div className="container-cronograma secoes">
        <form className="form-cronograma">
          <section className="section-cronograma">
            <div className="wrap-input">
              <select name="select"
                className={disciplina !== "" ? "has-val input" : "input"}
                type="text"
                value={disciplina}
                onChange={(e) => setDisciplina(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Administração">Administração</option>
                <option value="Contabilidade">Contabilidade</option>
                <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                <option value="Eletroeletrônica">Eletroeletrônica</option>
                <option value="Logística">Logística</option>
                <option value="Redes de Computadores">Redes de Computadores</option>
              </select>
              <span className="focus-input" data-placeholder="Disciplina"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={turma !== "" ? "has-val input" : "input"}
                type="text"
                value={turma}
                onChange={(e) => setTurma(e.target.value)}
              >
                <option value="" disable selected></option>
              </select>
              <span className="focus-input" data-placeholder="Turma"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
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

            <div className="wrap-input">
              <select name="select"
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
              <select name="select"
                className={date !== "" ? "has-val input" : "input"}
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Coordenador">Coordenador</option>
                <option value="Professor">Professor</option>
                <option value="Aluno">Aluno</option>
              </select>
              <span className="focus-input" data-placeholder="Data"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={horario !== "" ? "has-val input" : "input"}
                type="text"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Coordenador">Coordenador</option>
                <option value="Professor">Professor</option>
                <option value="Aluno">Aluno</option>
              </select>
              <span className="focus-input" data-placeholder="Horario"></span>
            </div>
            
          </section>
        </form>

      </div>
  );
}

export default Index;