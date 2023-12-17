import React, { useEffect, useState } from 'react'
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Carousel = ({ screens }) => {

  const [indice, setIndice] = useState(0);

  const changeCostumer = () => {
    setIndice((indice + 1) % screens.length);
  }


  const tiempoTransicion = 3000;

  useEffect(() => {
    const intervalo = setTimeout(() => {
      setIndice((indice + 1) % screens.length);
    }, tiempoTransicion);

    return () => clearInterval(intervalo);
  }, [indice]);


  return (
    // <div className='carousel'>
    //   <div className='carousel-container' >
    //   {screens.map((screen,i) => {
    //     return (
    //       <div key={i} style={{display: i === indice ? 'block' : 'none'}} >
    //         <div className='carousel-info'>
    //         <p>{screen.texto}</p>
    //         <div className='carousel-image-author'>
    //           <img src={`../assets/customers/${screen.imagen}`} alt="" />
    //           <div className='carousel-author-info'>
    //             <h4>{screen.autor}</h4>
    //             <span>{screen.ubicacion}</span>
    //           </div>
    //         </div>
    //         </div>
    //       </div>
    //     )
    //   })}
    //   </div>
    //   <FontAwesomeIcon className='carousel-right-arrow' onClick={changeCostumer} icon={faArrowRight}/>
    // </div>


    <div id="carouselExampleIndicators" className="carousel slide h-100 d-flex align-items-center py-5  text-white rounded-3" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner ">


        {screens.map((screen, i) => {
          return (
            <div class={screen.cName} data-bs-interval="10000">
              <div className="container ">
                <div className="row d-flex justify-content-center ">
                  <div className="col-9 d-flex flex-column gap-3">
                    <p>{screen.texto}</p>
                    <div className='d-flex justify-content-center gap-3'>
                      <img src={`../assets/customers/${screen.imagen}`} alt="" />
                      <div className='carousel-author-info'>
                        <h4>{screen.autor}</h4>            
                        <span>{screen.ubicacion}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}








      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  )
}

export default Carousel