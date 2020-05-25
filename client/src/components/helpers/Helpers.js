import React from 'react';
import bus1 from '../images/b1.jpg';
import bus3 from '../images/b3.jpg';
import bus5 from '../images/b5.jpg';
import bus6 from '../images/b6.jpg';
import bus8 from '../images/b8.jpg';
import bus9 from '../images/b9.jpg';
import bus10 from '../images/b10.jpg';
import bus11 from '../images/b11.jpg';
import bus12 from '../images/b12.jpg';

const Cars = [
  { name: 'B 159', route: 'KRD - IKJ', img: bus10 },
  { name: 'H 435', route: 'KRD - APP', img: bus11 },
  { name: 'L 098', route: 'OSH - IKJ', img: bus12 },
  { name: 'A 345', route: 'MNA - APP', img: bus1 },
  { name: 'C 021', route: 'CMS - KTU', img: bus3 },
  { name: 'E 930', route: 'OSH - IKT', img: bus5 },
  { name: 'F 823', route: 'M12 - M2', img: bus6 },
  { name: 'H 902', route: 'OSH - M2', img: bus8 },
  { name: 'I 232', route: 'M2 - APP', img: bus9 },
  { name: 'B 145', route: 'MNA - LKI', img: bus1 },
  { name: 'C 421', route: 'CMS - YBA', img: bus3 },
  { name: 'E 130', route: 'OSH - CMS', img: bus5 },
  
];

const Cards = ({ name, route, date, img }) => {
  console.log({date})
  return (
    
      <div className="col s12 m4 l3">
        <div className="card">
          <div className="card-image">
            <img src={img} alt={name} style={{height: "200px", width: "100%" }} />
            <span className="card-title">{name}</span>
          </div>
          <div className="card-content">
            <ul className="trip_details">
              <li >
                <i className="material-icons">directions_bus</i> 
                <strong> {name} </strong>
              </li>
              <li > 
                <i className="material-icons">location_on</i>
                <span> {route} </span>
              </li>
              <li >
                <i className="material-icons">date_range</i> 
                <span> {date} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
};

export  { Cars, Cards };
