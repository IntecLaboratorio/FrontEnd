import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./sidebar.css";
import { IconContext } from "react-icons";
import * as BiIcons from "react-icons/bi";
import Logo from "../../Img/branco.png";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function logout() {
    sessionStorage.clear();
    document.location.reload(true);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <BsIcons.BsFilterLeft onClick={showSidebar} />
          </Link>
          {/* <Link to="/home" className="wrap-img-logo-navbar">Intec</Link> */}
        <div className="wrap-img-logo-navbar">
          <Link to="/home" >
            <img src={Logo} alt="Intec" className="img-logo-navbar"></img>
          </Link>
        </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="navbar-toggle">
            <div className="logo-wrapper">
              <img src={Logo} alt="Logo" className="logo-sidebar" />
              <p className="logo-caption">Intec</p>
            </div>

            <Link
              to="#"
              className="menu-bars menu-bars-out"
              onClick={showSidebar}
            >
              <BsIcons.BsFilterRight />
            </Link>
          </div>

          <ul className="nav-menu-items" onClick={showSidebar}>
            <div className="menu-items-wrapper">
              {SidebarData.map((item, index) => {
                return (
                  <div key={index} className={item.cName}>
                    <Link to={item.path}>
                      <div className="menu-item-icon">{item.icon}</div>
                      <span className="sidebar-span">{item.title}</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="nav-text sidebar-item-logout">
              <Link to="/">
                <div className="menu-item-icon">
                  <BiIcons.BiLogOut />
                </div>
                <span className="sidebar-span" onClick={logout}>Sair</span>
              </Link>
            </div>
          </ul>
        </nav>

        <div
          className={sidebar ? "background" : "background-off"}
          onClick={showSidebar}
        ></div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
