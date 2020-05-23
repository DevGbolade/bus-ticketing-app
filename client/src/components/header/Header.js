import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="teal">
        <div className="container">
          <div className="nav-wrapper">
          <i className="fas fa-bus-alt"/>
            <a href="/" className="app-name">
              Bus Ticketting App
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
