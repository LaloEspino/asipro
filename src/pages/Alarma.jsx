import React, { Component, Fragment } from 'react'

import { alarmas } from '../productos/alarma.js'
import '../styles/pages/Alarma.css'
import Modal from '../components/Modal.jsx';

class Alarma extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    const alarmasMapping = alarmas.map((alarma, index) =>
      <div key={index} className='col-lg-4 col-md-6 col-sm-6'>
        <div className='card Alarma__card text-center'>
          <img src={alarma.imagen} className='card-img-top' alt={alarma.titulo} />
          <div className='card-body'>
            <h5 className='card-title'>{alarma.titulo}</h5>
            <button type='button' className='btn btn-primary' data-toggle='modal' data-target={'#' + alarma.clave}>
              Ver especificaciones
            </button>
            <Modal producto={alarma} />
          </div>
        </div>
      </div>
    )

    return (
      <Fragment>
        <div className='container'>
          <h1 className='mt-5'>Alarma</h1>

          <p>
            Los actuales sistemas de alarma no sólo cubren cada vez mayor tipo de incidencias, sino que permiten disfrutar de un sistema a la medida para cada necesidad de la oficina, industria o del hogar. Pueden ser aplicables a eventos como robo, incendio, etc.
          </p>

          <p>
            Un sistema de alarma digital permite que se le integren diversos tipos de componentes como: detector de ruptura de cristal, detector de movimiento, sirena, luz estrobo, contactos magnéticos para puertas, ventanas, foto celdas (protección exterior).
          </p>

          <div className='container'>
            <div className='row'>
              {alarmasMapping}
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}

export default Alarma
