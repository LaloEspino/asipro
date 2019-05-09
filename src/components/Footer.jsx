import React, { Fragment } from 'react'

import '../styles/components/Footer.css'

class Footer extends React.Component {

  render() {
    return (
      <Fragment>
        <footer className='footer mt-auto py-3'>
          <div className='container mt-5 mb-5 text-center'>
            <span className='text-muted'>
              Bonampak No. 52-1 Col. Vertiz Narvarte Del. Benito Juárez C.P. 03600 México, CDMX
            </span>
            <br />
            <span className='text-muted'>
              Tel. Conmutador: <a href='tel:5674 3274'>5674 3274</a>, email: <a href='mailto:info@asipro.com.mx'>info@asipro.com.mx</a>
            </span>
            <br />
            <span className='text-muted'>
              Asipro S.A. de C.V Derechos Reservados 2007
            </span>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer