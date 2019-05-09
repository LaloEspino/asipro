import React, { Component, Fragment } from 'react'

import curriculum from '../files/curriculum/curriculum.pdf'
import clientes from '../images/clientes.png'

class Clientes extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleClick = () => {
    window.open(curriculum)
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h1 className='mt-5'>Nuestros Clientes</h1>

          <p>
            Nuestro propósito inicial es definir en forma integral las necesidades específicas de cada cliente y nuestro objetivo, el proporcionarle la mejor solución técnica utilizando productos de la mejor calidad y precio adecuado complementado con mano de obra altamente calificada buscando ante todo, su satisfacción.
          </p>

          <div className="text-center">
            <img src={clientes} alt='clientes' />
          </div>

          <hr />

          <button className="btn btn-primary mb-5" onClick={this.handleClick}>
            Ver curriculum
          </button>

        </div>
      </Fragment>
    )
  }
}

export default Clientes
