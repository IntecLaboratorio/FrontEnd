import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import Sidebar from '../../Components/Sidebar/sidebar.js'
import './style.css'
import { IconContext } from "react-icons";

function Perfil() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div>
            <IconContext.Provider value={{ color: "#c4c4c4c4" }}>
            <div>
                <Sidebar/>
            </div>
            <form className="form-perfil">

                <section className="section-perfil">
                    <div className="header-perfil">
                       <div className="img-perfil"></div>
                        <h2 className="titulo-perfil">Nome do Aluno</h2>
                    </div>

                    <div className="div-input">
                        <div className="wrap-input-perfil">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                
                                />
                        </div>
                        <div>
                            <button className="btn "><AiIcons.AiOutlineForm/></button>
                        </div>
                    </div>

                    <div className="div-input">
                        <div className="wrap-input-perfil">
                            <input
                                className={senha !== "" ? "has-val input" : "input"}
                                type="text"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                />
                        </div>

                        <div>
                            <button className="btn "><AiIcons.AiOutlineForm/></button>
                        </div>
                    </div>
                </section>
            </form>
            </IconContext.Provider>
        </div>
    )
}

export default Perfil;
