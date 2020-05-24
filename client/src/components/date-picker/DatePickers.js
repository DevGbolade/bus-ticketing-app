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
        <h5 className="teal-text">Make a schedule</h5>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
    );
  }
}

export default DatePickers;
