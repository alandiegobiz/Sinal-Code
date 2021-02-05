import React from 'react'

import './styles.css';

import facebook from '../.././images/Logos/facebook.png';
import instagram from '../../images/Logos/instagram.png';
import gmail from '../../images/Logos/gmail.png';

const Footer = () => {
    return (
        <>
            <div className="footer">

                <p>&copy; Desenvolvido por SQUAD 2 SPT2 - Recode Pro 2021</p>
                <div className="logos">
                    <a href="https://www.facebook.com/sinal.code.1" className="facebook"><img src={facebook} alt="Facebook - Sinal Code"/></a>
                    <a href="https://www.instagram.com/sinalcode2020/?hl=pt-br" className="instagram"><img src={instagram} alt="Instagram - Sinal Code"/></a>
                    <a href="mailto:codesinal@gmail.com?subject=subject text" className="gmail"><img src={gmail} alt="Email - Sinal Code"/></a>
                </div>
                
            </div>
        </>
    )
}

export default Footer;
