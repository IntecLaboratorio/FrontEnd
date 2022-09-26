import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Style.css';

function Index() {
  const [value, onChange] = useState(new Date());
  return (
    <div className='calendar-margin'>
        <div className='caption-box'><p>Calendário</p></div>
        <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Index;