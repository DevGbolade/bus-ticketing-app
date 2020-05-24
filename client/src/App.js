import React from 'react';
import Header from './components/header/Header';
import Modal from './components/booking-form/BookingForm';
import BusSchedule from './components/bus-shedule/BusShedule';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <section className="container">
        <div className="row">
          <div className="col-s12">
            <Modal />
          </div>
          <div className="col-s12">
            <BusSchedule />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
