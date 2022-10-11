import React, { useEffect, useState } from "react";
// import "../TablePagination/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import api from '../../Service/api.js';

function App() {
  const [fixedAssent, setFixedAssent] = useState([]);

  useEffect(() => {
    async function getFixedAssent() {
      const { data } = await api.get('/fixedAssent');
      setFixedAssent(data)
      console.log(data)
    }
    getFixedAssent();
  }, [fixedAssent]);

  const products =
    fixedAssent.map((fixedAssent) => (
      { id: parseInt(`${fixedAssent.id}`), name: `${fixedAssent.assent_name}`, verify: `(${fixedAssent.verify})`, fk_labs: `${fixedAssent.fk_labs}` }
    ));

  // console.log(products)

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Nome", sort: true },
    { dataField: "verify", text: "Status do patrimônio", sort: true },
    { dataField: "fk_labs", text: "Laboratório", sort: true }
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
