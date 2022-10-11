import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import NavCadastro from '../../../Components/NavCadastro';
import '../cadastro.css';
import api from '../../../Service/api.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Lab() {

    const [fk_instruction, setFk_instruction] = useState(null);
    const [name_lab, setName_lab] = useState(null);
    const [room_index, setRoom_index] = useState(null);
    const [floor_lab, setFloor_lab] = useState(null);
    const [labs, setLabs] = useState([]);

    useEffect(() => {
        async function getLabs() {
            const { data } = await api.get('/labs');
            setLabs(data)
            console.log(data)
        }
        getLabs();
    }, []);


    async function insertLab(e) {
        e.preventDefault();
        try {
            const data = { fk_instruction, name_lab, room_index, floor_lab }

            if (fk_instruction && name_lab && room_index && floor_lab) {
                toast.success(`${name_lab} cadastrado com sucesso!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.warn('Todos os campos devem ser preenchidos', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            // window.location.reload(true);

            await api.post('/labs', data);

        } catch (err) {
            // alert(`Houve um problema: ${err}`)
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

        <div className="d-flex-lab">
            <div className="hide-mobile">
                <NavCadastro />
            </div>
            <section className="table-lab justify-center-mobile-lab" floor_labName="container-cadastro secoes">
                <table className="table table-striped table-bordered table-hover">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>Instituição</th>
                            <th>Nome lab ou sala</th>
                            <th>Tipo de sala</th>
                            <th>Andar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labs.map((labs) => (
                            <tr key={labs.id}>
                                <td> {labs.fk_instruction} </td>
                                <td> {labs.name_lab} </td>
                                <td> {labs.room_index} </td>
                                <td> {labs.floor_lab} </td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </section>
            <div className="container-cadastro">
                <form className="form-cadastro">
                    <section className="section-cadastro justify-center-mobile-lab">
                        <div className="wrap-input">
                            <input
                                className={fk_instruction !== null ? "has-val input" : "input"}
                                type="text"
                                value={fk_instruction}
                                style={{ color: '#FFF' }}
                                onChange={(e) => setFk_instruction(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Instituição"></span>
                        </div>

                        <div className="wrap-input">

                            <select name="select"
                                className={room_index !== null ? "has-val input" : "input"}
                                type="text"
                                value={room_index}
                                onChange={(e) => setRoom_index(e.target.value)}
                            >
                                <option value="" disable selected></option>
                                <option value="Laboratório">Laboratório</option>
                                <option value="Sala de aula ">Sala de aula</option>
                            </select>

                            <span className="focus-input" data-placeholder="Tipo de sala"></span>
                        </div>

                    </section>
                    <section className="section-cadastro justify-center-mobile-lab">

                        <div className="wrap-input">
                            <input
                                className={name_lab !== null ? "has-val input" : "input"}
                                type="text"
                                value={name_lab}
                                onChange={(e) => setName_lab(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome do lab ou sala"></span>
                        </div>
                        <div className="wrap-input">
                            <select name="select"
                                className={floor_lab !== null ? "has-val input" : "input"}
                                type="text"
                                value={floor_lab}
                                onChange={(e) => setFloor_lab(e.target.value)}
                            >
                                <option value="" disable selected></option>
                                <option value="1º andar">1º andar</option>
                                <option value="2º andar">2º andar</option>
                            </select>

                            <span className="focus-input" data-placeholder="Andar"></span>
                        </div>
                    </section>

                    <section className="section-btn-cadastro">
                        <button className="btn" onClick={insertLab}>Cadastrar</button>
                        <button className="btn">Alterar</button>
                    </section>
                </form>
                <ToastContainer />

            </div>
        </div>


    );

}

export default Lab;