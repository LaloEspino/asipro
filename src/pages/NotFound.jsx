import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import bug from '../images/bug.svg'
import '../styles/pages/NotFound.css'

class NotFound extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className='jumbotron'>
          <h1 className='display-4'>ERROR 404!</h1>
          <p className='lead'>La página no existe.</p>
          <hr className='my-4' />
          <Link className='btn btn-primary' to='/'>Regresar</Link>
          <div className='text-center'>
            <img className='NotFound__image mx-auto' src={bug} alt='Bug' />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NotFound
