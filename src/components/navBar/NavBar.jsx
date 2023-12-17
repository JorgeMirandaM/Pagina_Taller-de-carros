import React from 'react'
import { sections } from './sections.js'
import icono from '../../assets/icons/icon.png';
import './navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={icono} alt="Logo" width="110" class="d-inline-block align-text-top" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center gap-4">
            {sections.map((section, i) => {
              return (
                <li key={i} class="nav-item">
                  <a class="nav-link" href={section.id}>{section.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}



export default NavBar