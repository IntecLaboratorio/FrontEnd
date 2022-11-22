import { useEffect, useState } from "react";
import Sidebar from '../../Components/Sidebar/sidebar.js'
import AlterarSenha from '../../Components/AlterarSenha/alterarSenha.js'
import './style.css'


function Perfil() {
    const [typeUser, setTypeUser] = useState("");

    const transforming = () => {
        if (sessionStorage.getItem('typeUser') == 1) {
            setTypeUser("Coordenador");
        }
        else if (sessionStorage.getItem('typeUser') == 2) {
            setTypeUser("Professor");
        }
        else {
            setTypeUser("Aluno")
        }
    }

    useEffect(() => {
        transforming();
    }, [])

    const userName = sessionStorage.getItem('userName').split(" ")[0];
    const eMail = sessionStorage.getItem('email');
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <form className="form-perfil">

                <section className="section-perfil">
                    <div className="header-perfil">
                        <h2 className="titulo-typeUser">{typeUser}</h2>
                        <div className="img-perfil"> </div>
                        <h2 className="titulo-perfil">{userName}</h2>
                    </div>
                    <div>
                        <div className="div-perfil">
                            <span className="span-perfil">
                                {eMail}
                            </span>
                        </div>
                    </div>
                </section>

                <section>
                    <AlterarSenha />
                </section>
            </form>
        </div >
    )
}

export default Perfil;
