import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';
import api from '../../../Service/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";
import Sidebar from '../../../Components/Sidebar/sidebar.js'

function Patrimonio() {

  const [assent_name, setAssent_name] = useState("");
  const [serial_number, setSerial_number] = useState("");
  const [assent_number, setAssent_number] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [product_batch, setProduct_batch] = useState("");
  const [tax_invoice, setTax_invoice] = useState("");
  const [complement, setComplement] = useState("");
  const [value_assent, setValue_assent] = useState("");
  const [verify, setVerify] = useState("");
  const [color, setColor] = useState("")
  const [fk_labs, setFk_labs] = useState("");
  const [loading, setLoading] = useState("");

  function validate() {
    let errors = {};

    if (!assent_name || !serial_number || !assent_number || !brand || !model || !product_batch || !tax_invoice || !complement || !value_assent || !verify || !color || !fk_labs) {
      errors.input = toast.warn('Todos os campos devem ser preenchidos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (errors.input) {
      return false;
    }

    return true;

  }

  async function insertFixedAssent(e) {
    e.preventDefault();
    if (validate()) {
      try {

        setLoading(<Spinner id="loading" animation='border' />);

        const data = {
          assent_name, serial_number, assent_number, brand, model, product_batch, tax_invoice, complement, value_assent, verify, color, fk_labs
        }
        await api.post('/fixedAssent', data);

        toast.success(`Patrimonio ${assent_number} cadastrado com sucesso!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoading("");
        setAssent_name("");
        setSerial_number("");
        setAssent_number("");
        setBrand("");
        setModel("");
        setProduct_batch("");
        setTax_invoice("");
        setComplement("");
        setValue_assent("");
        setVerify("");
        setColor("");
        setFk_labs("");

      } catch (err) {
        setLoading("");
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
  }

  return (

    <div className="d-flex-patrimonio">
      <Sidebar/>
      <div className="hide-mobile">
        <NavCadastro />
      </div>
      <div className="container-cadastro secoes">

        <form className="form-cadastro">

          <section className="section-cadastro justify-center-mobile-patrimonio">

            <div className="wrap-input">
              <input
                className={assent_name !== "" ? "has-val input" : "input"}
                type="text"
                value={assent_name}
                onChange={(e) => setAssent_name(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={serial_number !== "" ? "has-val input" : "input"}
                type="text"
                value={serial_number}
                onChange={(e) => setSerial_number(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero de Série"></span>
            </div>

            <div className="wrap-input">
              <input
                className={assent_number !== "" ? "has-val input" : "input"}
                type="number"
                value={assent_number}
                onChange={(e) => setAssent_number(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero de Patrimônio"></span>
            </div>

            <div className="wrap-input">
              <input
                className={brand !== "" ? "has-val input" : "input"}
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Marca"></span>
            </div>

            <div className="wrap-input">
              <input
                className={tax_invoice !== "" ? "has-val input" : "input"}
                type="text"
                value={tax_invoice}
                onChange={(e) => setTax_invoice(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nota Fiscal"></span>
            </div>

            <div className="wrap-input">
              <input
                className={complement !== "" ? "has-val input" : "input"}
                type="text"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Complemento"></span>
            </div>

          </section>

          <section className="section-cadastro justify-center-mobile-patrimonio">

            <div className="wrap-input">
              <input
                className={model !== "" ? "has-val input" : "input"}
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Modelo"></span>
            </div>

            <div className="wrap-input">
              <input
                className={product_batch !== "" ? "has-val input" : "input"}
                type="text"
                value={product_batch}
                onChange={(e) => setProduct_batch(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Lote"></span>
            </div>

            <div className="wrap-input">
              <input
                className={color !== "" ? "has-val input" : "input"}
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Cor"></span>
            </div>

            <div className="wrap-input">
              <input
                className={fk_labs !== "" ? "has-val input" : "input"}
                type="text"
                value={fk_labs}
                onChange={(e) => setFk_labs(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Laboratório"></span>
            </div>

            <div className="wrap-input">
              <input
                className={value_assent !== "" ? "has-val input" : "input"}
                type="text"
                value={value_assent}
                onChange={(e) => setValue_assent(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Valor do patrimonio"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={verify !== "" ? "has-val input" : "input"}
                type="text"
                value={verify}
                onChange={(e) => setVerify(e.target.value)}
              >
                <option value="" disable selected></option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
              <span className="focus-input" data-placeholder="Estado do patrimonio"></span>
            </div>
          </section>

          <section className="section-btn-cadastro section-btn-cadastro--column">
            <button className="btn" onClick={insertFixedAssent}>Cadastro</button>
            <button className="btn btn-planilhas">Cadastro com Planilha</button>
          </section>
          <div className='loading'>{loading}</div>
        </form>
        <ToastContainer />
      </div>

    </div>
  )
}

export default Patrimonio;