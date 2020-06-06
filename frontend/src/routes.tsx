import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/"/>
      <Route component={CreatePoint} path="/sss"/>
    </BrowserRouter>
  )
}

export default Routes