import React from "react";
import Logo from "../../Img/branco.png";
import Navbar from "../../Components/Navbar/index.js";
import "./style.css";

function LandingPage() {
  return (
    <>
      <div className="container-landing">
        <Navbar />
        <main>
          <section className="section-1">
            <div className="div_Img_Txt">
              <img src={Logo} className="imgLanding" />
              <h2 className="nomeLogo">InTec</h2>
            </div>
            
          </section>
        </main>
      </div>
    </>
  );
}

export default LandingPage;
