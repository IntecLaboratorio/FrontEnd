import React from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// Dei o nome para o seu Card de "Cardd e fiz uma PROPS, ou seja, estou importando as propriedades dele para qualquer outro lugar que você queira usar"
function Cardd(props) {
  return (
    //Deixei do mesmo jeito a estilização que você fez, inclusive as classes
    <div className="orgCard"> 

      <div className="card1">
        <img
          className="img1"
          src={props.imagem} /* Para colocar imagem na pagina inicial basta chamar o nome "imagem"  dentro do "CardGroup", a mesma coisa vale para o seu texto, basta chamar "descricao" */
          alt="First slide"
        />
        <p className="descrição">{props.descricao}</p>  
      
      </div>

    </div>
  );
}

export default Cardd; 