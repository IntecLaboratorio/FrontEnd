import React, { useState } from "react";
import './style.css';

function DatePick(){

  const [date, setDate] = useState(); 
  console.log("Date", date)
  return(
    <div className="calendar">
      <input type='date' onChange={e=>setDate(e.target.value)}/>
    </div>
    
  )
}

export default DatePick