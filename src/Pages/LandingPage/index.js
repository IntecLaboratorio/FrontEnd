import React from 'react';
import Logo from '../../Img/branco.png';
import Navbar from '../../Components/Navbar/index.js';
import './style.css';

function LandingPage() {
    return (
        <>
            <div className='container'>
                <main>
                    <section className='section-1'>

                        <div className='div_Img_Txt'>
                            <p className='slgtxt'>InTec! Te conecta ao mundo.</p>
                            <img src={Logo} className="imgLanding" />

                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default LandingPage