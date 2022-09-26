import { useState } from "react";
import './style.css';

function Form() {

    const [nArmario, setArmario] = useState("");
    const [andar, setAndar] = useState("");
    const [email, setEmail] = useState("");

    return (
      <div className="App">
        <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <div className="wrap-input">
            <input
                className={nArmario !== "" ? "has-val input" : "input"}
                type="text"
                value={nArmario}
                onChange={(e) => setArmario(e.target.value)}
              />
              <span className="focus-input" data-placeholder="N° do Armario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={andar !== "" ? "has-val input" : "input"}
                type="email"
                value={andar}
                onChange={(e) => setAndar(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Andar"></span>
            </div>

            <div className="wrap-input-radio">
                <div className="wrap-title">
                    <label className="label">Alugar Durante</label>
                </div>

                <div className="input-radio">
                <label className="label-radio">
                    <input className="radio" type="radio" value="semestre"></input>
                    Um semestre
                </label>

                <label className="label-radio">
                    <input className="radio" type="radio" value="semestre"></input>
                    Um ano
                </label>
                </div>
                
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            
            <section className="footer">

              <div className="wrap-checkbox">
                <label>
                    <input type="checkbox"></input>
                    O pagamento foi realizado
                </label>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Alugar Armário</button>
              </div>

            </section>

          </form>
        </div>
      </div>
      </div>
    );
  }
  
  export default Form;