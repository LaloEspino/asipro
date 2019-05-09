import React, { Fragment } from 'react'

import '../styles/components/Modal.css'

class Modal extends React.Component {

  handleClick = (documento) => {
    window.open(documento)
  }

  render() {

    const producto = this.props.producto

    return (
      <Fragment>
        <div className='modal fade' id={producto.clave} tabIndex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalCenterTitle'>
                  {producto.titulo}
                </h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body text-left'>
                <div className='text-center'>
                  <img src={producto.imagen} className='img-fluid Modal__image' alt={producto.clave} />
                </div>
                {producto.texto.map((texto, index) =>
                  <p key={index}>* {texto}</p>
                )}
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cerrar</button>
                <button type='button' className='btn btn-primary' onClick={() => this.handleClick(producto.documento)}>Descargar ficha técnica</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Modal