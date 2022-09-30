import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Style.css';

function Index(props) {
  return (
    <div className='table-container'>
       <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>header1</th>
                            <th>header2</th>
                            <th>header3</th>
                            <th>header4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
    </div>
  );
}

export default Index;