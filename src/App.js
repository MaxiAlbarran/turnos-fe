import logo from './logo.svg';
import './App.css';
import CreateAppointment from './components/CreateAppointment/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Data from './components/AppointmentList/Data';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={CreateAppointment} />
      <Route path="/Turnos" exact component={Data} />
    </BrowserRouter>
  );
}

export default App;
