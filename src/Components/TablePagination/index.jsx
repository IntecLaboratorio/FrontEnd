import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import api from '../../Service/api.js';

function App() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    async function getLabs() {
      const { data } = await api.get('/labs');
      setLabs(data)
      console.log(data)
    }
    getLabs();
  }, []);

  const products =
    labs.map((labs) => (
      { id: parseInt(`${labs.id}`), instruction: `${labs.fk_instruction}`, name: `${labs.name_lab}`, room_index: `${labs.room_index}`, floor_lab: `${labs.floor_lab}` }
    ));

  console.log(products)

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "instruction", text: "Instituição", sort: true },
    { dataField: "name", text: "Nome lab ou sala", sort: true },
    { dataField: "room_index", text: "Tipo de sala", sort: true },
    { dataField: "floor_lab", text: "Andar", sort: true }
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc"
    }
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  });

  return (
    <div className="App">
      <h5>React Bootstrap Table Next with Sorting and Pagination</h5>

      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
    </div>
  );
}

export default App;
