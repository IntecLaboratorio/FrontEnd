import { CTable } from "@coreui/react";
import './style.css'
import api from '../../Service/api.js';
import { useEffect, useState } from "react";


function Table() {

  const [reqLabs, setReqLabs] = useState([]);

  useEffect(() => {
    async function findReqLabs() {
      const { data } = await api.get('/reqLabs');
      setReqLabs(data)
      console.log(data)
    }
    findReqLabs();
  }, [reqLabs]);


  return (
    <>
      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="top">header1</th>
            <th className="top">header2</th>
            <th className="top">header3</th>
            <th className="top">header4</th>
            <th className="top">Aceitas?</th>
          </tr>
        </thead>

        <tbody>
          {
            reqLabs.map((reqLab) => (
              <tr key={reqLab.id}>
                <td>{reqLab.fk_discipline}</td>
                <td>{reqLab.bloco_aula}</td>
                <td>{reqLab.periodo}</td>
                <td>{reqLab.data_req}</td>
                <td>
                  <button className="btn-accept">Aceitar</button>
                  <button className="btn-deny">Negar</button>
                </td>
              </tr> 
            ))
          }
        </tbody>

      </table>

    </>
  )
}

export default Table;