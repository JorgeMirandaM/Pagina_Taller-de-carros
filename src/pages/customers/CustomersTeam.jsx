import React from 'react';

import workTeam from '../../assets/images/workTeam.jpg';

import './customersTeam.css';
import { customers } from './customers';
import Carousel from '../../components/carousel/Carousel';
const CustomersTeam = () => {
  return (
    <section className='section-team-customers' id='section-team-customers'>
        <div className='section-team-customers-container'>
            <div className='section-team'>
                <img src={workTeam} alt="work Team" data-aos="fade-up"/>
                <div className='section-team-info'>
                    <div className='section-team-title'>
                        <hr />
                        <h3>Personal calificado</h3>
                    </div>
                    <p>En Carfix creemos que tener un personal altamente capacitado es la mejor forma de transmitir nuestros valores. Más que un servicio, nuestro personal te brindará la confianza y seguridad de que tu auto esta en buenas manos. </p>
                </div>
            </div>
            <div className='section-customers' data-aos="fade-up"
   >
                <Carousel screens={customers}/>
            </div>
        </div>
    </section>
  )
}

export default CustomersTeam