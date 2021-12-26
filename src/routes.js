import React from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'
import MassagesList from './pages/MassagesList'
import CreateAppointment from './pages/CreateAppointment'
import AnimatedRoutes from './AnimatedRoutes'

function Routes() {

  // const location = useLocation();

  // console.log(location)

  return (
    <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
  )
}

export default Routes
