import React from "react";

function Index(props) {
  return (
    <div>
      <div class="cut"></div>
      <header className='header'><h2>{`${props.page}`}</h2></header>
    </div>
  );
}

export default Index;