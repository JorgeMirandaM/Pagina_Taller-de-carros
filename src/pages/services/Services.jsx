import React from 'react'
import './services.css';
import { servicesArray } from './servicesArray.js';
import ServiceDescription from '../../components/serviceDescription/ServiceDescription';
const Services = () => {
    return (
        <section className='section-services' id='section-services'>
            <div className='section-services-container'>
                <div className='section-services-general-description'>
                    <div className='services-description-title'>
                        <hr />
                        <h3>Servicios</h3>
                    </div>
                    <p>En cada uno de los Talleres Carfix contamos con un servicio integral total para tu vehículo. Conoce nuestros servicios en mecánica automotriz, hojalatería y pintura, electricidad automotriz, escáner, venta y montaje de llantas y estética automotriz con personal altamente especializado.</p>
                </div>

                <div className='section-services-services' >
                {servicesArray.map((service,i) => {
                    return (
                        <ServiceDescription   key={i} titulo={service.title} descripcion={service.description} imagen={service.image}/>
                    )
                })}
                </div>


            </div>
        </section>
    )
}

export default Services