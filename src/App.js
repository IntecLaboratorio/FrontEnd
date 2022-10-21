import React from 'react';
import ProtectRouter from './protectedRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/index.js';
import Teste from './Components/TesteTable/index.jsx';
import LandingPage from './Pages/LandingPage/index.js';
import Home from './Pages/Home/index.jsx'
import CronogramaLab from './Pages/Cronograma/cronograma-lab/index.jsx';
// import CronogramaQuadra from './Pages/Cronograma/cronograma-quadra/index.jsx';
import CadastroLab from './Pages/Cadastro/CadastroLab/lab.js';
import CadastroPatrimonio from './Pages/Cadastro/CadastroPatrimonio/patrimonio.js';
import CadastroUsuario from './Pages/Cadastro/CadastroUsuario/CadastroUsuario.js';
import Endereco from './Pages/Cadastro/CadastroUsuario/endereco.js'
import Manutencao from './Pages/Manutencao/ConsultaManutencao/index.jsx';
import SolicitacaoManutencao from './Pages/Manutencao/SolicitacaoManutencao/index.jsx'
// import AluguelArmario from './Pages/AluguelArmario/index.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<ProtectRouter />}>
          <Route path='/teste' element={<Teste />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cronograma-lab' element={<CronogramaLab />} />
          {/* <Route path='/cronograma-quadra' element={<CronogramaQuadra />} /> */}
          <Route path='/cadastro-patrimonio' element={<CadastroPatrimonio />} />
          <Route path='/endereco' element={<Endereco />} />
          <Route path='/cadastro-laboratorio' element={<CadastroLab />} />
          <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
          <Route path='/manutencao' element={<Manutencao />} />
          <Route path='/solicitacaoManutencao' element={<SolicitacaoManutencao />} />
        </Route>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      {/* <Laboratorio />
        <AluguelArmario /> */}

    </BrowserRouter>
  )
}

export default App