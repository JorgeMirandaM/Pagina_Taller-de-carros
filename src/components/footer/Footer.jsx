import React from 'react'
import icono from '../../assets/icons/icon.png';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { sections } from '../navBar/sections';
const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <div className='footer-first-section'>
                    <div className='footer-description'>
                        <img src={icono} alt="car image" />
                        <p>Carfix nace gracias a la experiencia obtenida con el trabajo diario y durante más de 40 años en el mantenimiento vehicular.</p>
                    </div>
                    <div className='footer-data'>
                        <h4>Ubicación</h4>
                        <p id='location'>Av. Luis Donaldo Colosio Entrada a la Central de Abastos
                            C.P. 77500  Cancún, Quintana Roo</p>
                        <p id='telephone'>#61 123 123 123</p>
                        <p id='email'>correo@demo.com</p>
                    </div>
                    <div className='footer-sections'>
                        <h4>Secciones</h4>
                        <ul>
                            {sections.map((section, i) => {
                                return (
                                    <li key={i}><a href={section.id}>{section.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='footer-social-media'>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="icon"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="icon"
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="icon"
                        ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='footer-second-section'>
                    <p>@ 2023, Carservice, ALL RIGHT RESERVED | Terms And Conditions | Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer