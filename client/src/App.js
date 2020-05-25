import React from 'react';
import Header from './components/header/Header';
import Modal from './components/booking-form/BookingForm';
import BusSchedule from './components/bus-shedule/BusShedule';
import TripDetail from './components/trip-detail'

function toggleSchedule() {
  let node = document.getElementById('bus-schedule')
  node.style.display = node.style.display == 'none' ? 'block' : 'none'
}

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <div className="row">
          <div className="col-s12">
            <Modal />
          </div>
          <br />
          <div className="col-s12" id="bus-schedule">
            <BusSchedule />
          </div>
          <div className="col-s12" id="bus-schedule">
            <TripDetail />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
