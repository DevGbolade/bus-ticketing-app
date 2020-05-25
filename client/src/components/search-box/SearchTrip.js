import React from 'react';

const SearchTrip = () => {
  return (
      <form className="">
          <div className="input-field" style={{margin: '0 auto'}} >
            <i className="material-icons prefix">search</i>
            <input type="text" className="validate" id="search"  style={{marginBottom: '0'}}/>
            <label htmlFor="search">Search</label>
          </div>
      </form>
  );
};

export default SearchTrip;
