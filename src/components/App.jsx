import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import QuienesSomos from '../pages/QuienesSomos'
import NotFound from '../pages/NotFound'
import Clientes from '../pages/Clientes'
import Layout from './Layout'
import Contacto from '../pages/Contacto'
import Alarma from '../pages/Alarma'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={NotFound} />
          <Route exact path='/quienes-somos' component={QuienesSomos} />
          <Route exact path='/clientes' component={Clientes} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/productos/alarma' component={Alarma} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
