import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css'

const columns = [
  {id: 'numeroArmario', label: 'N° Armário', minWidth:170, align: 'center'},
  {id: 'andar', label: 'Andar', minwidth: 100, align: 'center'},
  {id: 'status', label: 'Status', minWidth: 170, align: 'center'}
];

function createData(numeroArmario, andar, status){
  return {numeroArmario, andar, status}
}

const rows = [
  createData('01', '1° Andar', 'Disponível'),
  createData('02', '1° Andar', 'Em Análise'),
  createData('03', '1° Andar', 'Indisponível'),
  createData('04', '1° Andar', 'Disponível'),
  createData('05', '1° Andar', 'Disponível'),
  createData('06', '1° Andar', 'Disponível'),
  createData('07', '1° Andar', 'Disponível'),
  createData('08', '1° Andar', 'Em Análise'),
  createData('09', '1° Andar', 'Indisponível'),
  createData('10', '1° Andar', 'Disponível'),
  createData('11', '2° Andar', 'Disponível'),
  createData('12', '2° Andar', 'Disponível'),
  createData('13', '2° Andar', 'Disponível'),
  createData('14', '2° Andar', 'Em Análise'),
  createData('15', '2° Andar', 'Indisponível'),
  createData('16', '2° Andar', 'Disponível'),
  createData('17', '2° Andar', 'Disponível'),
  createData('18', '2° Andar', 'Disponível'),
]


 export default function Armario() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
  };

  return (

    <div className="container-table">
      <Table striped bordered hover>

        <thead>
          <tr>
            {columns.map((column) => 
              <th
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth }}
              >
                {column.label}
              </th>
            )}
          </tr>
        </thead>

        <tbody>

        {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
        return (
          <tr>
          {columns.map((column) => {
          const value = row[column.id];
          return(
            <td key={column.id} align={column.align}>
              {column.format && typeof value === 'number'
                ? column.format(value)
                : value}
            </td>
          )
          })}
          </tr>
          );
          })}
        </tbody>
      </Table>
    </div>
  );
}
