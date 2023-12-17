import React from 'react';

import contactImage from '../../assets/images/contactImage.jpg'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <section className='section-contact' id='section-contact'>
            <div className='section-contact-container' data-aos="fade-up">
                <form className='section-contact-form'>
                    <h2>Contactanos</h2>
                    <span></span>
                    <p>Escríbenos tus sugerencias, preguntas o solicita una cotización. Nuestro equipo se pondrá en contact contigo a la brevedad posible.</p>
                    <ul>
                        <li>
                            <label htmlFor="">Nombre</label>
                            <input type="text"  placeholder='Nombre' />
                        </li>
                        <li>
                            <label htmlFor="">Correo Electrónico</label>
                            <input type="text"  placeholder='Correo Electrónico' />
                        </li>
                        <li>
                            <label htmlFor="">Mensaje</label>
                            <textarea name="" id="sections-contact-messageField" cols="30" rows="10"></textarea>
                        </li>
                    </ul>
                    <button>Enviar</button>
                </form>
                <div className='section-contact-social-media'>
                    <h2>Contactanos</h2>
                    <span></span>
                    <p>Síguenos a través de los medios sociales para compartir tus opiniones.</p>
                    <div className='container-social-media-icons'>
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
                    <div className='container-social-media-image'>
                    <img src={contactImage} alt="contact Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact