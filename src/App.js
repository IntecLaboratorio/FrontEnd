import React from 'react';
import ProtectRouter from './protectedRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/index.js';
import LandingPage from './Pages/LandingPage/index.js';
import Home from './Pages/Home/index.jsx'
import CronogramaLab from './Pages/Cronograma/cronograma-lab/index.jsx';
// import CronogramaQuadra from './Pages/Cronograma/cronograma-quadra/index.jsx';
import CadastroLab from './Pages/Cadastro/CadastroLab/lab.js';
import CadastroPatrimonio from './Pages/Cadastro/CadastroPatrimonio/patrimonio.js';
import CadastroUsuario from './Pages/Cadastro/CadastroUsuario/CadastroUsuario.js';
import Manutencao from './Pages/Manutencao/index.jsx';
// import AluguelArmario from './Pages/AluguelArmario/index.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectRouter />}>
          <Route path='/home' element={<Home />} />
          <Route path='/cronograma-lab' element={<CronogramaLab />} />
          {/* <Route path='/cronograma-quadra' element={<CronogramaQuadra />} /> */}
          <Route path='/cadastro-patrimonio' element={<CadastroPatrimonio />} />
          <Route path='/cadastro-laboratorio' element={<CadastroLab />} />
          <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
          <Route path='/manutencao' element={<Manutencao />} />
        </Route>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      {/* <Laboratorio />
        <AluguelArmario /> */}

    </BrowserRouter>
  )
}

export default App