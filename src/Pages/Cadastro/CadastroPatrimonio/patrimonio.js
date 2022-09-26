import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';

function Patrimonio(){

    const [nome, setNome] = useState("");
    const [numeroSerie, setNumeroS] = useState("");
    const [numeroPatrimonio, setNumeroP] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [lote, setLote] = useState("");
    const [cor, setCor] = useState("");
    const [laboratorio, setLaboratorio] = useState("");

    return(

          <>
              <NavCadastro />
            <div className="container-cadastro secoes">
              <form className="form-cadastro">
              <section className="section-cadastro">
              <div className="wrap-input">
                <input
                  className={nome !== "" ? "has-val input" : "input"}
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={numeroSerie !== "" ? "has-val input" : "input"}
                  type="text"
                  value={numeroSerie}
                  onChange={(e) => setNumeroS(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Numero de Série"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={numeroPatrimonio !== "" ? "has-val input" : "input"}
                  type="text"
                  value={numeroPatrimonio}
                  onChange={(e) => setNumeroP(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Numero de Patrimônio"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={marca !== "" ? "has-val input" : "input"}
                  type="text"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Marca"></span>
              </div>
              </section>
              <section className="section-cadastro">
              <div className="wrap-input">
                <input
                  className={modelo !== "" ? "has-val input" : "input"}
                  type="text"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Modelo"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={lote !== "" ? "has-val input" : "input"}
                  type="text"
                  value={lote}
                  onChange={(e) => setLote(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Lote"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={cor !== "" ? "has-val input" : "input"}
                  type="text"
                  value={cor}
                  onChange={(e) => setCor(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Cor"></span>
              </div>
              <div className="wrap-input">
                <input
                   className={laboratorio !== "" ? "has-val input" : "input"}
                   type="text"
                   value={laboratorio}
                   onChange={(e) => setLaboratorio(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Laboratório"></span>
              </div>
              </section>
              <section className="section-btn-cadastro section-btn-cadastro--column">
                  <button className="btn">Cadastro</button>
                  <button className="btn btn-planilhas">Cadastro com Planilha</button>
              </section>
              </form>
                    </div>
          </>
    )
}

export default Patrimonio;