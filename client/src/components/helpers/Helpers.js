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
  { name: 'J', modelNum: '010', img: bus10 },
  { name: 'K', modelNum: '011', img: bus11 },
  { name: 'L', modelNum: '012', img: bus12 },
  { name: 'A', modelNum: '001', img: bus1 },
  { name: 'C', modelNum: '003', img: bus3 },
  { name: 'E', modelNum: '005', img: bus5 },
  { name: 'F', modelNum: '006', img: bus6 },
  { name: 'H', modelNum: '008', img: bus8 },
  { name: 'I', modelNum: '009', img: bus9 },
  
];

const Cards = ({ name, modelNum, img }) => {
  return (
    
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={img} alt={name} style={{height: "200px", width: "100%" }} />
            <span className="card-title">{name}</span>
          </div>
          <div className="card-content">
            <ul className="collection">
              <li className="collection-item">Name: {name} </li>
              <li className="collection-item">Model-Number: {modelNum}</li>
            </ul>
          </div>
        </div>
      </div>

  );
};

export  { Cars, Cards };
