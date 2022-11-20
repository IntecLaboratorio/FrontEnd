import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Style.css';

function Index(props) {
    
    const [date, setDate] = useState("");

    return (
        <div className='table-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <input
                                className={date !== "" ? "has-val input" : "input"}
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <span
                                className="focus-input"
                                data-placeholder="Data"
                            ></span>

                        </th>

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