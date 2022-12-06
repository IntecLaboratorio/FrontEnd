import React, { useEffect, useState } from 'react'
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
    title: "Pagina Inicial",
    path: "/home",
    icon: <AiIcons.AiOutlineHome/>,
    cName: 'nav-text',
    admin: "coordenador",
    admin2: "professor"
    },

    {
    title: "Perfil",
    path: "/perfil",
    icon: <AiIcons.AiOutlineUser/>,
    cName: 'nav-text',
    admin: "coordenador",
    admin2: "professor"
    },

    {
    title: "Solicitar Laboratorio",
    path: "/solicitacao-lab",
    icon: <AiIcons.AiOutlineDesktop/>,
    cName: 'nav-text',
    admin: "coordenador",
    admin2: "professor"
    },
    {
    title: "Solicitar Manutenção",
    path: "/solicitacaoManutencao",
    icon: <AiIcons.AiOutlineTool/>,
    cName: 'nav-text',
    admin: "coordenador",
    admin2: "professor"
    },
    {
    title: "Cadastros",
    path: "/cadastro-usuario",
    icon: <AiIcons.AiOutlinePlus/>,
    cName: 'nav-text',
    admin: "coordenador"
    },
    {
    title: "Consultar Patrimônios",
    path: "/consulta-patrimonio",
    icon: <AiIcons.AiOutlineSearch/>,
    cName: 'nav-text',
    admin: "coordenador"
    },
    {
    title: "Solicitações de laboratorio",
    path: "/aceite",
    icon: <AiIcons.AiFillQuestionCircle/>,
    cName: 'nav-text',
    admin: "coordenador"
    },
    {
    title: "Solicitações de manutenção",
    path: "/consulta-manutencao",
    icon: <AiIcons.AiFillQuestionCircle/>,
    cName: 'nav-text',
    admin: "coordenador"
    },

]