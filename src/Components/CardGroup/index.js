import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Cardd from '../Card'
import { Link } from 'react-router-dom';
import './style.css'


function GroupCard() {
  return (
    <div>
      <CardGroup className='grupo'>
       <Link to=""><Cardd
          imagem="https://img.icons8.com/glyph-neue/70/FFFFFF/computer.png"
          descricao="Solicitar Laboratório"
        /></Link>

        <Link to="/solicitacaoManutencao"><Cardd
          imagem="https://img.icons8.com/ios/70/FFFFFF/request-service.png"
          descricao="Solicitar Manutenção"
        /></Link>

        <Link to="/cadastro-patrimonio"><Cardd
          imagem="https://img.icons8.com/fluency-systems-regular/70/FFFFFF/edit-user.png"
          descricao="Cadastros"
        /></Link>

        <Link to=""><Cardd
          imagem="https://img.icons8.com/ios-filled/70/FFFFFF/search--v1.png"
          descricao="Consultar Patrimônios"
        /></Link>

      </CardGroup>
    </div>
  )
}

export default GroupCard