import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MassagesList from './pages/MassagesList';
import CreateAppointment from './pages/CreateAppointment';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

function App() {
  

    return (
      <div>
        <BrowserRouter>
          
            <Switch >
              <Route path='/' exact component={MassagesList} />
              <Route
                path='/createappointment/:id'
                exact
                component={CreateAppointment}
              />
            </Switch>
        </BrowserRouter>
      </div>
    )
  

  
}

export default App;
