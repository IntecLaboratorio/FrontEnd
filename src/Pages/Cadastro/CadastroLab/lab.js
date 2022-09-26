import { useState } from "react";
import Table from 'react-bootstrap/Table';
import NavCadastro from '../../../Components/NavCadastro';
import '../cadastro.css';

function Lab() {

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [disciplina, setDisc] = useState("");
    const [andar, setAndar] = useState("");

  return (

        <div>
            <NavCadastro />
            <section className="container-cadastro secoes">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Disciplinas</th>
                <th>Andar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </Table>
            </section>
                <div className="container-cadastro">
            <form className="form-cadastro">
                <section className="section-cadastro">
                    <div className="wrap-input">
                    <input
                        className={nome !== "" ? "has-val input" : "input"}
                        type="text"
                        value={nome}
                        style={{color: '#FFF'}}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                    </div>
                    <div className="wrap-input">
                    <input
                        className={tipo !== "" ? "has-val input" : "input"}
                        type="text"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Tipo"></span>
                    </div>
                </section>
                <section className="section-cadastro">
                    <div className="wrap-input">
                    <input
                        className={disciplina !== "" ? "has-val input" : "input"}
                        type="text"
                        value={disciplina}
                        onChange={(e) => setDisc(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Disciplina"></span>
                    </div>
                    <div className="wrap-input">
                    <input
                        className={andar !== "" ? "has-val input" : "input"}
                        type="text"
                        value={andar}
                        onChange={(e) => setAndar(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Andar"></span>
                    </div>
                </section>
                <section className="section-btn-cadastro">
                    <button className="btn">Cadastrar</button>
                    <button className="btn">Alterar</button>
                </section>
            </form>
            
            
                </div>
        </div>

  );
}

export default Lab;