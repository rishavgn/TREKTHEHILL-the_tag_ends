import React from "react";
import profile from "../components/images/Lucky-removebg-preview.png";
import "./styles/Main.css";
function Main() {
    return (
        <section className="patient-section">
            <div className="div-appointment flex-1">
                <div>
                    <h2>Book Appointment</h2>
                    <form action="#">
                        <div className="div-choose-doctor space">
                            <label htmlFor="choose-doctor">Choose Doctor</label>
                            <select name="choose-doctor" id="choose-doctor">
                                <option area-disabled selected value=""> -- select an option -- </option>
                                <option value="Dr. Chandra Verma">Dr. Chandra Verma</option>
                                <option value="Dr. Rohit Sharma">Dr. Rohit Sharma</option>
                                <option value="Dr. Prem Dewangan">Dr. Prem Dewangan</option>
                                <option value="Dr. Ashok Kumar">Dr. Ashok Kumar</option>
                                <option value="Dr. Dinanath Chourasiya">Dr. Dinanath Chourasiya</option>
                            </select>
                        </div>
                        <div className="space">
                            <label htmlFor="choose-date">Choose Date</label>
                            <input type="date" min="03/03/2022" max="22/10/2022" />
                        </div>
                        <div className="space">
                            <div className="patient-problem"><label htmlFor="patient-problem">Describe Your Problem here</label></div>
                            <textarea name="patient-problem" id="patient-problem" cols="50" rows="4"></textarea>
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
                <div className="patient-card-child-wrapper">
                <div><img src={profile} alt="patient-profile" /></div>
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

export default Main;