import { useState } from "react";
import '../cadastro.css';
import NavCadastro from '../../../Components/NavCadastro';
import api from '../../../Service/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Patrimonio() {

  const [assent_name, setAssent_name] = useState(null);
  const [serial_number, setSerial_number] = useState(null);
  const [assent_number, setAssent_number] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [product_batch, setProduct_batch] = useState(null);
  const [tax_invoice, setTax_invoice] = useState(null);
  const [complement, setComplement] = useState(null);
  const [value_assent, setValue_assent] = useState(null);
  const [verify, setVerify] = useState(null);
  const [color, setColor] = useState(null);
  const [fk_labs, setFk_labs] = useState(null);

  async function insertFixedAssent(e) {
    try {
      e.preventDefault();

      const data = {
        assent_name, serial_number, assent_number, brand, model, product_batch, tax_invoice, complement, value_assent, verify, color, fk_labs
      }

      if (assent_name && serial_number && assent_number && brand && model && product_batch && tax_invoice && complement && value_assent && verify && color && fk_labs) {
        toast.success(`Patrimono ${assent_number} cadastrado com sucesso!`, {
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

      await api.post('/fixedAssent', data);

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

    <div className="d-flex-patrimonio">
      <div className="hide-mobile">
        <NavCadastro />
      </div>
      <div className="container-cadastro secoes">

        <form className="form-cadastro">

          <section className="section-cadastro justify-center-mobile-patrimonio">

            <div className="wrap-input">
              <input
                className={assent_name !== null && "" ? "has-val input" : "input"}
                type="text"
                Assent={assent_name}
                onChange={(e) => setAssent_name(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={serial_number !== null && "" ? "has-val input" : "input"}
                type="text"
                Assent={serial_number}
                onChange={(e) => setSerial_number(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero de Série"></span>
            </div>

            <div className="wrap-input">
              <input
                className={assent_number !== null && "" ? "has-val input" : "input"}
                type="number"
                Assent={assent_number}
                onChange={(e) => setAssent_number(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Numero de Patrimônio"></span>
            </div>

            <div className="wrap-input">
              <input
                className={brand !== null && "" ? "has-val input" : "input"}
                type="text"
                Assent={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Marca"></span>
            </div>

            <div className="wrap-input">
              <input
                className={tax_invoice !== null && "" ? "has-val input" : "input"}
                type="text"
                value={tax_invoice}
                onChange={(e) => setTax_invoice(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nota Fiscal"></span>
            </div>

            <div className="wrap-input">
              <input
                className={complement !== null && "" ? "has-val input" : "input"}
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
                className={model !== null && "" ? "has-val input" : "input"}
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Modelo"></span>
            </div>

            <div className="wrap-input">
              <input
                className={product_batch !== null && "" ? "has-val input" : "input"}
                type="text"
                value={product_batch}
                onChange={(e) => setProduct_batch(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Lote"></span>
            </div>

            <div className="wrap-input">
              <input
                className={color !== null && "" ? "has-val input" : "input"}
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Cor"></span>
            </div>

            <div className="wrap-input">
              <input
                className={fk_labs !== null && "" ? "has-val input" : "input"}
                type="text"
                value={fk_labs}
                onChange={(e) => setFk_labs(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Laboratório"></span>
            </div>

            <div className="wrap-input">
              <input
                className={value_assent !== null && "" ? "has-val input" : "input"}
                type="text"
                value={value_assent}
                onChange={(e) => setValue_assent(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Valor do patrimonio"></span>
            </div>

            <div className="wrap-input">
              <select name="select"
                className={verify !== null && "" ? "has-val input" : "input"}
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
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Patrimonio;