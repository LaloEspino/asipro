import React, { Fragment } from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

class Layout extends React.Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}

export default Layout