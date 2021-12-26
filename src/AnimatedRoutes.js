import React from 'react'
import { useLocation, Route} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import MassagesList from './pages/MassagesList'
import CreateAppointment from './pages/CreateAppointment'
import { Switch } from 'react-router/cjs/react-router.min'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

function AnimatedRoutes() {

  const location = useLocation()
  console.log(location.key);

  return (
    <div>
      
      <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={450}
        classNames ="fade">
          <Route path='/' exact component={MassagesList} />
          <Route
            path='/createappointment/:id'
            exact
            component={CreateAppointment}
          />
        </CSSTransition>
      </TransitionGroup>
      
    </div>
  )
}

export default AnimatedRoutes
