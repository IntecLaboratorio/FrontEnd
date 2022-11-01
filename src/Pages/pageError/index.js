import React from "react";
import './style.css'
import { Link } from 'react-router-dom';

function app() {
    return(
        <>
        <div className="flex">
            <div className="container-error">
                <h1 className="text-top">Ops!</h1>
                <h2 className="text-bottom">Pagina não encontrada!</h2>

                <Link to="/home">
                    <button className="btn-error" >Voltar</button>
                </Link>
            </div>

            <div className="img-error">
                <img src="https://img.icons8.com/pastel-glyph/400/EFEFEF/page-not-found--v2.png"/>
            </div>
        </div>
        </>
    )
}

export default app