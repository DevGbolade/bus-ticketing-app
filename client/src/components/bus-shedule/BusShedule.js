import React from 'react';
import './BusSchedule.css';
import DatePicker from './../date-picker/DatePickers';
import SearchTrip from './../search-box/SearchTrip';
import { Cars, Cards } from '../helpers/Helpers';

const BusSchedule = () => {
  return (
    <section className="bus-schedule">
      <div className="row">
        <div className="col s6">
          <DatePicker />
        </div>
        <div className="col s6" >
          <SearchTrip />
        </div>
        <div className="col s12" style={{ marginTop: "1rem"}}>
          {Cars.map(({ name, modelNum, img }) => (
            <Cards name={name} modelNum={modelNum} img={img} key={modelNum} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusSchedule;
