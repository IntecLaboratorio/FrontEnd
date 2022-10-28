import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../Img/branco.png'
import Carousel from '../../Components/TesteCarrosel/index.jsx';
import Sidebar from '../../Components/Sidebar/sidebar.js'
import { useState } from "react";


function Index() {

  const [showCronograma, setShowCronograma] = useState(true)
  const [showSolicitacaoManutencao, setShowSolicitacaoManutencao] = useState(true)
  const [showCadastroUsuario, setShowCadastroUsuario] = useState(true)
  const [showConsulta , setShowConsulta ] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('typeUser') == '2' && sessionStorage.getItem('login') == 'true') {
      setShowCadastroUsuario(false)
      setShowConsulta(false)
    } else if (sessionStorage.getItem('typeUser') == '3' && sessionStorage.getItem('login') == 'true'){
      setShowCadastroUsuario(false)
      setShowConsulta(false)
      setShowSolicitacaoManutencao(false)
      setShowCronograma(false)
    }
  }, []);

  return (
    <>
    <Sidebar></Sidebar>
      <div className="row-home">
        <div className="w-70">
          {/* Carousel */}
          <Carousel />
          {/* End Carousel */}
        </div>
        {/* CardGroup */}
        <div className="w-30 logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="cards-home">

      { showCronograma ? <Link to="/cronograma-lab">
          <div className="card-home">
            <img src="https://img.icons8.com/glyph-neue/70/FFFFFF/computer.png" alt="Solicitar Laboratório" title="Solicitar Laboratório" />
            <h3 className="title-home">Solicitar Laboratório</h3>
          </div>
        </Link>  : null }

        { showSolicitacaoManutencao ? <Link to="/solicitacaoManutencao">
          <div className="card-home">
            <img src="https://img.icons8.com/ios/70/FFFFFF/request-service.png" alt="Solicitar Manutenção" title="Solicitar Manutenção" />
            <h3 className="title-home">Solicitar Manutenção</h3>
          </div>
        </Link> : null }

        { showCadastroUsuario ? <Link to="/cadastro-usuario">
         <div className="card-home">
            <img src="https://img.icons8.com/fluency-systems-regular/70/FFFFFF/edit-user.png" alt="Cadastro de Usuário" title="Cadastro de Usuário" />
            <h3 className="title-home">Cadastro de Usuário</h3>
          </div>
         </Link> : null }

         { showConsulta ? <Link to="/">
          <div className="card-home">
            <img src="https://img.icons8.com/ios-filled/70/FFFFFF/search--v1.png" alt="Consultar Patrimônios" title="Consultar Patrimônios" />
            <h3 className="title-home">Consultar Patrimônios</h3>
          </div>
        </Link> : null }
      </div>
      {/* End CardGroup */}
    </>
  );
}

export default Index;