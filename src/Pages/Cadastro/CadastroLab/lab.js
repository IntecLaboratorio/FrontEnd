import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import NavCadastro from '../../../Components/NavCadastro';
import '../cadastro.css';
import api from '../../../Service/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

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
    }, [labs]);

    const laboratories =
        labs.map((labs) => (
            { id: parseInt(`${labs.id}`), instruction: `${labs.fk_instruction}`, name: `${labs.name_lab}`, room_index: `${labs.room_index}`, floor_lab: `${labs.floor_lab}` }
        ));


    const columns = [
        { dataField: "id", text: "Id", sort: true },
        { dataField: "instruction", text: "Instituição", sort: true },
        { dataField: "name", text: "Nome lab ou sala", sort: true },
        { dataField: "room_index", text: "Tipo de sala", sort: true },
        { dataField: "floor_lab", text: "Andar", sort: true }
    ];

    const defaultSorted = [
        {
            dataField: "name",
            order: "desc"
        }
    ];

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: ">>",
        firstPageText: "<<",
        nextPageText: ">",
        prePageText: "<",
        showTotal: false,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log("page", page);
            console.log("sizePerPage", sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log("page", page);
            console.log("sizePerPage", sizePerPage);
        }
    });

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

            setFk_instruction("");
            setName_lab("");
            setRoom_index("");
            setFloor_lab("");

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
            <section className="table-pagination justify-center-mobile-lab">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={laboratories}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    pagination={pagination}
                />
            </section>
            <div className="container-cadastro secoes">
                <form className="form-cadastro">
                    <section className="section-cadastro justify-center-mobile-lab">
                        <div className="wrap-input">
                            <input
                                className={fk_instruction !== null && "" ? "has-val input" : "input"}
                                type="text"
                                value={fk_instruction}
                                style={{ color: '#FFF' }}
                                onChange={(e) => setFk_instruction(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Instituição"></span>
                        </div>

                        <div className="wrap-input">

                            <select name="select"
                                className={room_index !== null && "" ? "has-val input" : "input"}
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
                                className={name_lab !== null && "" ? "has-val input" : "input"}
                                type="text"
                                value={name_lab}
                                onChange={(e) => setName_lab(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome do lab ou sala"></span>
                        </div>
                        <div className="wrap-input">
                            <select name="select"
                                className={floor_lab !== null && "" ? "has-val input" : "input"}
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