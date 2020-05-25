import React from 'react';
import './BusSchedule.css';
import DatePicker from './../date-picker/DatePickers';
import SearchTrip from './../search-box/SearchTrip';
import { Cars, Cards } from '../helpers/Helpers';

const date = new Date()

const BusSchedule = () => {
  return (
    <section className="section">
      <div className="row">
        <div className="col s6">
          <DatePicker />
        </div>
        <div className="col s6" >
          <SearchTrip />
        </div>
        <div className="col s12" style={{ marginTop: "1rem"}}>
          {Cars.map(({ name, route, img }) => (
            <Cards name={name} route={route} img={img} date={`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`} key={route} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusSchedule;
