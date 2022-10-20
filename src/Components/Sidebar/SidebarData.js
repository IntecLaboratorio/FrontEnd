import React from 'react'
import * as AiIcons from "react-icons/ai";



export const SidebarData = [
    {
    title: "Pagina Inicial",
    path: "/home",
    icon: <AiIcons.AiOutlineHome/>,
    cName: 'nav-text'
    },

    {
    title: "Notificações",
    path: "/notificacao",
    icon: <AiIcons.AiOutlineBell/>,
    cName: 'nav-text'
    },

    {
    title: "Perfil",
    path: "/",
    icon: <AiIcons.AiOutlineUser/>,
    cName: 'nav-text'
    },

    {
    title: "Horários",
    path: "/",
    icon: <AiIcons.AiOutlineCalendar/>,
    cName: 'nav-text'
    },

]