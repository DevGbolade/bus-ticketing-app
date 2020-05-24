import React, { Component } from 'react';
import './BookingForm.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start'); 
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '2%',
      endingTop: '10%'
    };
    M.Modal.init(this.Modal, options);
  }
handleSubmit =(e) => {
  e.preventDefault();
}
  render() {
    return (
      <div className="center">
        <h5 className="teal-text">Welcome, having an itch-free movement is our priority........  
          <a className="waves-effect waves-light btn modal-trigger" data-target="modal1" style={{marginLeft: '1em'}}>
            Buy your ticket
          </a>
        </h5>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">          
            <h4>
              <i className="fas fa-bus-alt" style={{color: '#000'}}/>
              <span style={{ marginLeft: '1em' }}>Enter your booking info</span>
            </h4>
            <div className="row">
              <form className="col s12" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Name</label>
                  </div>

                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">event</i>
                    <input id="date_of_birth" type="date" className="validate" />
                    <label htmlFor="date_of_birth" className="active">Date of Birth</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">event</i>
                    <input id="date_of_booking" type="date" className="validate" min={new Date().toISOString().split('T')[0]} required />
                    <label htmlFor="date_of_booking" className="active">Booking Date</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="teal white-text waves-effect waves-teal btn-flat" style={{ marginRight: '2em' }}> Book
                  <i className="material-icons right">send</i>
                  </button>
                  <button className="modal-close red white-text waves-effect waves-red btn-flat"> Close
                  <i className="material-icons right">cancel</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
