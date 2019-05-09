import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

class NavBar extends React.Component {

  render() {
    return (
      <Fragment>
        <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='' />
            Asipro
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/quienes-somos'>Quienes somos<span className='sr-only'>(current)</span></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/clientes'>Clientes</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contacto'>Contacto</Link>
              </li>
              <li className='nav-item dropdown'>
                <Link className='nav-link dropdown-toggle' to='#' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  Productos
                </Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <Link className='dropdown-item' to='/productos/alarma'>Alarma</Link>
                  <Link className='dropdown-item' to='/productos/monitoreo'>Monitoreo</Link>
                  <Link className='dropdown-item' to='/productos/incendio'>Incendio</Link>
                  <Link className='dropdown-item' to='/productos/deteccion-metales'>Detección de metales</Link>
                  <Link className='dropdown-item' to='/productos/control-acceso'>Control de acceso</Link>
                  <Link className='dropdown-item' to='/productos/cctv'>CCTV</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default NavBar