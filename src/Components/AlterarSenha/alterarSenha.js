import { Alert, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import './style.css';

function AlterarSenha() {


    const [senha, setsenha] = useState("");
    const [ConfirmSenha, setConfirmsenha] = useState("");

    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    return (
        <>
            <Button className="btn-alterarSenha" onClick={handleShow}>
                Alterar Senha
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                className="modal"
            >

                <Modal.Body>
                    <section>

                        <div className="wrap-input">
                            <input
                                className={senha !== "" ? "has-val input" : "input"}
                                type="senha"
                                value={senha}
                                onChange={(e) => setsenha(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={ConfirmSenha !== "" ? "has-val input" : "input"}
                                type="email"
                                value={ConfirmSenha}
                                onChange={(e) => setConfirmsenha(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Confirme sua Senha"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="btn-alterarSenha">Alterar Senha</button>
                        </div>
                    </section>
                </Modal.Body>
            </Modal>
        </>
    )
}


export default AlterarSenha