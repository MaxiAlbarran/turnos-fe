import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateAppointment from './components/CreateAppointment/index';
import AppointmentList from './components/AppointmentList/index';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={CreateAppointment} />
      <Route path="/turnos" exact component={AppointmentList} />
    </BrowserRouter>
  );
}

export default App;
