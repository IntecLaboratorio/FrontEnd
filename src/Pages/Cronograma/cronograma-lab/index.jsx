import React from 'react';
import '../Style.css';
import Table from '../../../Components/Table/index.jsx';
import Form from '../../../Components/Form/index.jsx'
import Sidebar from '../../../Components/Sidebar/sidebar.js'

function Index(props) {
  return (
    <>
    <Sidebar></Sidebar>
    <div className='secoes container-cronograma'>
      <div className='container d-flex align-around'>
        <section className='table-cronograma justify-center-mobile'>
          <Table />
        </section>
        <section className='formulario-cronograma'>
          <Form interruptor={false} />
        </section>
      </div>
    </div>
    </>
  );
}

export default Index;