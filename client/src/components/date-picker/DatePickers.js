import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class DatePickers extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        {/* <h5 className="teal-text">Make a schedule</h5> */}
        <div>
          <button type="submit" className="btn-flat booking_schedule_button booking_schedule_button_left">
            <i className="material-icons">chevron_left</i>
          </button>
          <DatePicker className="booking_schedule_date"
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd-MM-yyyy"
          styl
          />
          <button type="submit" className="btn-flat booking_schedule_button booking_schedule_button_right">
            <i className="material-icons">chevron_right</i>
          </button>
        </div>
      </div>
    );
  }
}

export default DatePickers;
