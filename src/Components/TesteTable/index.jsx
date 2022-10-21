import { CTable } from "@coreui/react";
import './style.css'

function Table() {

    return (
      <>
    <table border="1" className="table-container">
        <thead>
          <tr>
              <th className="top">header1</th>
              <th className="top">header2</th>
              <th className="top">header3</th>
              <th className="top">header4</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td>Lab1</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td>Lab2</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td>Lab3</td>
              <td></td>
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td colSpan="4">
                <button className="btn-accept">Aceitar</button>
                <button className="btn-deny">Negar</button>
              </td>

          </tr>
        </tbody>

      </table>

      </>
    )
}

export default Table;