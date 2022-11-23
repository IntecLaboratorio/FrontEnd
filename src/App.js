import React from "react";
import {
  ProtectedProf,
  ProtectedCoordenador,
  ProtectedAll
} from "./protectedRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/index.js";
import Teste from "./Components/TesteTable/index.jsx";
import LandingPage from "./Pages/LandingPage/index.js";
import Home from "./Pages/Home/index.jsx";
import CronogramaLab from "./Pages/Cronograma/cronograma-lab/index.jsx";
// import CronogramaQuadra from './Pages/Cronograma/cronograma-quadra/index.jsx';
import CadastroLab from "./Pages/Cadastro/CadastroLab/lab.js";
import CadastroPatrimonio from "./Pages/Cadastro/CadastroPatrimonio/patrimonio.js";
import CadastroUsuario from "./Pages/Cadastro/CadastroUsuario/CadastroUsuario.js";
import Endereco from "./Pages/Cadastro/CadastroUsuario/endereco.js";
import Manutencao from "./Pages/Manutencao/ConsultaManutencao/index.jsx";
import SolicitacaoManutencao from "./Pages/Manutencao/SolicitacaoManutencao/index.jsx";
import TesteTable from "./Components/TablePagination/index.jsx";
import PageError from './Pages/pageError/index.js'
// import AluguelArmario from './Pages/AluguelArmario/index.js';
import "./App.css";
import Perfil from "./Pages/Perfil/perfil.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedAll/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/perfil" element={<Perfil />} />
        </Route>

        <Route element={<ProtectedProf/>}>
        {/* <Route path='/cronograma-quadra' element={<CronogramaQuadra />} /> */}
        <Route path="/cronograma-lab" element={<CronogramaLab />} />
        <Route path="/manutencao" element={<Manutencao />} />
        <Route path="/solicitacaoManutencao" element={<SolicitacaoManutencao />} /> 
        <Route path="/teste-pagination" element={<TesteTable />} /> 
        </Route>

        <Route element={<ProtectedCoordenador/>}>
          <Route path="/teste" element={<Teste />} />
          <Route path="/cadastro-patrimonio" element={<CadastroPatrimonio />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/cadastro-laboratorio" element={<CadastroLab />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      {/* <Laboratorio />
        <AluguelArmario /> */}
    </BrowserRouter>
  );
}

export default App;
