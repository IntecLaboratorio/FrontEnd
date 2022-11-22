import React, { useState } from "react";

function DatePick(){

  const [date, setDate] = useState(); 
  console.log("Date", date)
  return(
    <div className="calendar">
      {/* <h1>select date:</h1> */}
      <input type='date' onChange={e=>setDate(e.target.value)}/>
    </div>
    
  )
}

export default DatePick