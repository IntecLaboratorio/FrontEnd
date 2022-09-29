import { useState } from "react";
import Table from 'react-bootstrap/Table';
import NavCadastro from '../../../Components/NavCadastro';
import '../cadastro.css';
import api from '../../../Service/api.js'

function Lab() {

    const [fk_instruction, setFk_instruction] = useState("");
    const [name_lab, setName_lab] = useState("");
    const [room_index, setRoom_index] = useState("");
    const [floor_lab, setFloor_lab] = useState("");


    async function insertLab() {
        try {
            const data = { fk_instruction, name_lab, room_index, floor_lab }

            await api.post('/labs', data);

            alert(`Patrimono ${name_lab} cadastrado com sucesso!`)

        } catch (err) {
            alert(`Houve um problema: ${err}`)
        }
    }


    return (

        <div>
            <NavCadastro />
            <section floor_labName="container-cadastro secoes">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Instituição</th>
                            <th>Nome lab ou sala</th>
                            <th>Tipo de sala</th>
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
                                className={fk_instruction !== "" ? "has-val input" : "input"}
                                type="text"
                                value={fk_instruction}
                                style={{ color: '#FFF' }}
                                onChange={(e) => setFk_instruction(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Instituição"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={name_lab !== "" ? "has-val input" : "input"}
                                type="text"
                                value={name_lab}
                                onChange={(e) => setName_lab(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome do lab ou sala"></span>
                        </div>
                    </section>
                    <section className="section-cadastro">
                        <div className="wrap-input">
                            <input
                                className={room_index !== "" ? "has-val input" : "input"}
                                type="text"
                                value={room_index}
                                onChange={(e) => setRoom_index(e.target.value)} />
                            <span className="focus-input" data-placeholder="Tipo de sala"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={floor_lab !== "" ? "has-val input" : "input"}
                                type="text"
                                value={floor_lab}
                                onChange={(e) => setFloor_lab(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Andar"></span>
                        </div>
                    </section>
                    <section className="section-btn-cadastro">
                        <button className="btn" onClick={insertLab}>Cadastrar</button>
                        <button className="btn">Alterar</button>
                    </section>
                </form>


            </div>
        </div>

    );
}

export default Lab;