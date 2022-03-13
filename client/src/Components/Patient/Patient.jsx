import axios from "axios";
import "./patient.css";
import React from 'react';
import setAuthToken from '../../utils/setAuthToken';
import { NavLink, useHistory } from 'react-router-dom';


export default function Patient() {
    const history = useHistory();
	function onLogoutClick(e){
        e.preventDefault();
        localStorage.removeItem('jwtToken');
        setAuthToken(false);
    }
	const [appoint, setAppoint] = React.useState({
        doctorname:"",
        date:"",
        problem:"",

    })

    const [height, setHeight] = React.useState(0);
    const [mass, setMass] = React.useState(0);
    const [bmi, setBmi] = React.useState(0);
  
    const calculate = (e) => {
      e.preventDefault();
      const formValid = +height > 0 && +mass > 0;
      if (!formValid) {
        return;
      }
      const bmi = +mass / (+height) ** 2;
      setBmi(bmi);
    };

    function handlechange(event) {
        const {name, value} = event.target
        setAppoint(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

        function handleSubmit(event) {
            event.preventDefault()
            // submitToApi(formData
             const { doctorname, date, problem} = appoint;
             const newUser = {
                doctorname:doctorname,
                 date:date,
                   problem:problem,

             }
            axios
            .post('/api/patients/card', newUser)
            .then(alert("mesesege sent"))
            console.log(appoint)
        history.push('/doctor')

    
}
    
    

	return (
        <section className="patient-section">
        <div className="div-appointment flex-1">
            <div>
                <h2>Book Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="div-choose-doctor space">
                        <label htmlFor="choose-doctor">Choose Doctor</label>
                        <select name="doctorname" id="choose-doctor"  value={appoint.doctorname}
                    onChange={handlechange}>
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
                        <input type="date" name="date" min="03/03/2022" max="22/10/2022"  value={appoint.date}
                    onChange={handlechange} />
                    </div>
                    <div className="space">
                        <div className="patient-problem"><label htmlFor="patient-problem">Describe Your Problem here</label></div>
                        <textarea name="problem" id="patient-problem" cols="50" rows="4"
                         value={appoint.problem}
                         onChange={handlechange}/>
                    </div>
                    <div>
                    <button className="btn mrg-right" >Confirm</button>

                    </div>
                </form>
            </div>
            <div className="div-bmi">
                <h2 >Calculate BMI</h2>
                <form action="#">
                    <div className="space">
                    <label  htmlFor="height">Your Height:</label>
                    <input placeholder="height in meters" className="inline" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div className="space">
                    <label htmlFor="weight">Your Weight:</label>
                    <input placeholder="weight in kgs" className="inline" value={mass} onChange={(e) => setMass(e.target.value)} />

                    <button onClick={calculate}>calculate</button>
                    <p>bmi: {bmi}</p>
                    </div>


                </form>
            </div>
        </div>

        <div className="patient-card flex-1">
   
            <div className="patient-card-child-wrapper">
            <div><img src="https://i2.wp.com/www.additudemag.com/wp-content/uploads/2006/12/GettyImages-1129223269.jpg?resize=1280%2C720px&ssl=1" alt="patient-profile" /></div>
            <div>
            <h5>Name: mark Manson</h5>
             <h5>Age : 64</h5>
            <h5>Address: Raipur, CG </h5>
            </div>
            <button className="btn-transparant btn-margin mrg-right" >upcoming Appointment</button>
            <button className="btn btn-margin">Last Prescription</button>
            </div>
        </div>
    </section>
	)
}
