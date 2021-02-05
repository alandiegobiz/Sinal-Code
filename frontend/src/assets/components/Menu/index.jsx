import React from 'react';
import { Link } from 'react-router-dom';
import logo_sinalcode from '../.././images/Logos/logo_sinalcode.png';

import './styles.css';

const BaseMenu = (props) => {   
    
    return (

        <>  
            <div className="section-3">
                <div className="box1">
                    <Link to="/">
                        <img src={logo_sinalcode} alt="Sinal Code - Logo" />
                    </Link>
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                            <ul class="nav align-items-sm-center">
                                <li class="nav-item active">
                                    <Link className="menu nav-link" to="/quemsomos">QUEM SOMOS</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link className="menu nav-link" to="/cursos">CURSOS</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link className="menu nav-link" to="/faleconosco">FALE CONOSCO</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link className="menu nav-link" to="/login">FAZER LOGIN</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>

    );
}


export default BaseMenu;

