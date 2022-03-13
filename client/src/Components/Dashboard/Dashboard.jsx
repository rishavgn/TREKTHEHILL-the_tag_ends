import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import { fillUser } from '../../redux/actions/authActions';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  constructor() {
    super();
    this.state = {
      doctorname: '',
      date: '',
      problem: '',
      errors: {}
    };
  }
  handlechange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  registerSubmit = e => {
    e.preventDefault();
    const newUser = {
      doctorname: this.state.doctorname,
     date: this.state.date,
      problem: this.state.problem,
    };
    this.props.fill(newUser);
  };

  render() {
    const {erros, doctorname, date, problem} = this.state;
    
    return (
      <section className="patient-section">
      <div className="div-appointment flex-1">
          <div>
              <h2>Book Appointment</h2>
              <form onSubmit={this.registerSubmit}>
                  <div className="div-choose-doctor space">
                      <label htmlFor="choose-doctor">Choose Doctor</label>
                      <select name="doctorname" id="choose-doctor"  value={doctorname}
                  onChange={this.handlechange}>
                          <option area-disabled selected value=""> -- select an option -- </option>
                          <option value="Dr. Chandra Verma">Dr. Chandra Verma</option>
                          <option value="Dr. Rohit Sharma">Dr. Rohit Sharma</option>
                          <option value="Dr. Prem Dewangan">Dr. Prem Dewangan</option>
                          <option value="Dr. Ashok Kumar">Dr. Ashok Kumar</option>
                          <option value="Dr. Dinanath Chourasiya">Dr. Dinanath Chourasiya</option>
                      </select>
                  </div>
                  <div className="space">
                      <label htmlFor="date"  >Choose Date</label>
                      <input type="date" name="date" min="03/03/2022" max="22/10/2022"  value={date}
                  onChange={this.handlechange} />
                  </div>
                  <div className="space">
                      <div className="patient-problem"><label htmlFor="patient-problem">Describe Your Problem here</label></div>
                      <textarea name="problem" id="patient-problem" cols="50" rows="4"
                       value={problem}
                       onChange={this.handlechange}/>
                  </div>
                  <div>
                  <button className="btn mrg-right">Confirm</button>
                  <button className="btn btn-transparant">Submit</button>
                  </div>
              </form>
          </div>
          <div className="div-bmi">
              <h2 >Calculate BMI</h2>
              <form action="#">
                  <div className="space">
                  <label htmlFor="height">Your Height:</label>
                  <input className="inline" type="number" id="height" name="height" />
                  </div>
                  <div className="space">
                  <label htmlFor="weight">Your Weight:</label>
                  <input className="inline" type="number" id="weight" name="weight" />
                  <label htmlFor="your-bmi">Your BMI is:</label>
                  </div>


              </form>
          </div>
      </div>

      <div className="patient-card flex-1">
      <button
                onClick={this.onLogoutClick}
                className="btn btn-lg btn-warning mt-5"
              >
                Logout
              </button>
          <div className="patient-card-child-wrapper">
          <div><img src="" alt="patient-profile" /></div>
          <div>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Age" />
          <input type="text" placeholder="Address" />
          </div>
          <button className="btn-transparant btn-margin mrg-right" >upcoming event</button>
          <button className="btn btn-margin">Last Prescription</button>
          </div>
      </div>
  </section>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);


