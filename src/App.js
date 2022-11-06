import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import React, { Component } from "react";
import { AddAppointmentComponent } from './components/AddAppointmentComponent';
/* import HeaderComponent from './components/Header';
import HomeComponent from './components/Home'; */
import { ListAppointmentComponent } from './components/ListAppointmentComponent';
import { UpdateAppointmentComponent } from './components/UpdateAppointmentComponent';

function App() {
  
  return (
    <div>
    <BrowserRouter>
    {/* <HeaderComponent /> */}
     <div className="container-fluid">
      <Switch>
        {/* <Route path="/" exact component={HomeComponent}></Route> */}
        <Route path="/listappointments" component={ListAppointmentComponent}></Route>
        <Route path="/addappointment" component={AddAppointmentComponent}></Route>
        <Route path="/updateappointment/:appointment_id" component={UpdateAppointmentComponent}></Route> 
      </Switch>
      </div>
      </BrowserRouter>
      </div>
  );
}




export default App;
