import React, { useState } from "react";
import './style.css';

function DatePick(props) {

  const [date, setDate] = useState();
  let teste = date;
  return (
    <div className="calendar">
      <input type='date' onChange={e => setDate(e.target.value)} />
    </div>

  )
}

export default DatePick