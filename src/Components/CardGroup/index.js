import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Cardd from '../Card'
import './style.css'


function GroupCard() {
  return (
    <div>
      <CardGroup className='grupo'>
        <Cardd
          imagem="https://img.icons8.com/glyph-neue/70/FFFFFF/computer.png"
          descricao="Solicitar Laboratório"
        />
        <Cardd
          imagem="https://img.icons8.com/ios/70/FFFFFF/request-service.png"
          descricao="Solicitar Manutenção"
        />
        <Cardd
          imagem="https://img.icons8.com/fluency-systems-regular/70/FFFFFF/edit-user.png"
          descricao="Cadastros"
        />
        <Cardd
          imagem="https://img.icons8.com/ios-filled/70/FFFFFF/search--v1.png"
          descricao="Consultar Patrimônios"
        />
      </CardGroup>
    </div>
  )
}

export default GroupCard