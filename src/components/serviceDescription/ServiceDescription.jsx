import React from 'react'
import './ServiceDescription.css';


const ServiceDescription = ({titulo,descripcion,imagen}) => {
  
  return (
    <div className='description-service-container' >
      <img src={`../assets/gallery/${imagen}`} alt={imagen} data-aos="fade-up"/>
        <div className='description-service-content'>
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
        </div>
    </div>
  )
}

export default ServiceDescription