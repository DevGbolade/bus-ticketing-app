import React from 'react';

const SearchTrip = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <h5 className="teal-text">Search for trips</h5>
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input type="text" className="validate" id="search" />
            <label htmlFor="search">Search</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchTrip;
