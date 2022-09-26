import React from 'react';
import './Style.css';
// import Search from '../../Components/Search';
import Calendar from '../../Components/Calendar/index.js';
import 'react-calendar/dist/Calendar.css';
import Card from '../../Components/Card/index.js'
import Header from '../../Components/Header/index.js';

function Index(props) {
  return (
    <div>
    <div className='secoes'>
      <div className='screen'>
        <Header page='Laboratórios' />
        {/* <Search /> */}
        <article className='article-lab'>
          <Calendar />
          <Card />
        </article>
      </div>
    </div>
    </div>
  );
}

export default Index;