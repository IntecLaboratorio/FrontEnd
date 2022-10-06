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
          imagem="https://img.icons8.com/puffy/70/FFFFFF/experimental-user-puffy.png"
          descricao="Solicitar Manutenção"
        />
        <Cardd
          imagem="https://img.icons8.com/ios-filled/70/FFFFFF/building.png"
          descricao="Cadastros"
        />
        <Cardd
          imagem="https://img.icons8.com/pastel-glyph/70/FFFFFF/error--v5.png"
          descricao="Consultar Patrimônios"
        />
      </CardGroup>
    </div>
  )
}

export default GroupCard