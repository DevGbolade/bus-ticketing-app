import React from 'react';
import './style.css';
import DatePicker from '../date-picker/DatePickers';
import SearchTrip from '../search-box/SearchTrip';
import { Cars, Cards } from '../helpers/Helpers';
import bus12 from '../images/b12.jpg';

let date = new Date()
date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

const TripDetail = () => {
  return (
    <section className="section" style={{ padding: "auto 15%" }}>
      <div className="row">
        <div className="col s12" style={{ padding: "1rem 10% 0" }}>
          <strong className="bus-name left"> F 202 </strong>
          <span className="right"> {date} </span>
        </div>
        <div className="col s2">
            <ul className="trip_details_route" style={{marginTop: '2.5em'}}>
              <li> KRD </li>
              <li> KRD </li>
              <li> KRD </li>
              <li> KRD </li>
              <li> KRD </li>
              <li> KRD </li>
              <li> KRD </li>
            </ul>
        </div>
        <div className="col s10" >
          <img src={bus12} alt="F 202" style={{height: "40vh", width: "100%" }} />
        </div>
      </div>
    </section>
  );
};

export default TripDetail;
