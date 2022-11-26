import React from 'react'
import * as AiIcons from "react-icons/ai";



export const SidebarData = [
    {
        title: "Pagina Inicial",
        path: "/home",
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text',
    },

    {
        title: "Perfil",
        path: "/perfil",
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },

    {
        title: "Horários",
        path: "/horarios",
        icon: <AiIcons.AiOutlineCalendar />,
        cName: 'nav-text'
    },
    {
        title: "Solicitar Laboratorio",
        path: "/cronograma-lab",
        icon: <AiIcons.AiOutlineDesktop />,
        cName: 'nav-text'
    },
    {
        title: "Solicitar Manutenção",
        path: "/solicitacaoManutencao",
        icon: <AiIcons.AiOutlineTool />,
        cName: 'nav-text'
    },
    {
        title: "Cadastros",
        path: "/cadastro-usuario",
        icon: <AiIcons.AiOutlinePlus />,
        cName: 'nav-text'
    },
    {
        title: "Consultar Patrimônios",
        path: "/consulta-patrimonio",
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },

]