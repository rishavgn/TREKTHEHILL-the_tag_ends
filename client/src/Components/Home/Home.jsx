import React from 'react';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const [user, setuser] = React.useState({
   name:"",
    email:"",
    queries:"",
})
  function handlechange(event) {
    const {name, value} = event.target
    setuser(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData
     const { name, email, queries} = user;
     const newUser = {
       name:name,
       email:email,
       queries:queries
     }
    axios
    .post('/api/contacts/home', newUser)
    .then(alert("mesesege sent"))
    console.log(user)
}
  return (
    <div className="main_box">
    <div className="main_box_child-1">
      <div className="left_box">
        <h1>Welcome to  Medic Portal</h1>
        <h2>Apex Hospital</h2>
        <p>Medic Portal is a one stop solution to reduce the communication gap between doctors and patients. It helps in keeping track of appointments,  prescriptions to both patients as well as doctors. 
</p>
      </div>

      <div className="right_box">
        <div className="form_box">
          <form onSubmit={handleSubmit} >
            <div className="email_div">
              <label htmlFor="name" id="head_label">Name</label>
              <input id='head_input' type="text" name='name' placeholder='Your Name'
                value={user.name}
                onChange={handlechange} />
            </div>

            <div className="email_div">
              <label id='head_label' htmlFor="email">Email</label>
              <input id='head_input' name='email' type="email" placeholder='Enter your email'
                value={user.email}
                onChange={handlechange}
              />
            </div>
            <div className="email_div">
              <label id='head_label' htmlFor="email">queries</label>
              <textarea rows="3" cols="43"
                value={user.comments}
                placeholder="Write your Queries"
                onChange={handlechange}
                name="comments"
              /> 
            </div>
            <button className='btn_login'>Submit</button>

          </form>
        </div>

      </div>

    </div>
    <div className="main_box_child-2">
    <div>
    <h2>Location</h2>
        <iframe i src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8043877501696!2d86.20829881395159!3d22.809711029975997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e306d1e6d235%3A0x80407dd9f46408b3!2sApex%20Hospital!5e0!3m2!1sen!2sin!4v1647082132947!5m2!1sen!2sin" width="400" height="200" style={{ border: "0"}} allowfullscreen="" loading="lazy"></iframe>
    </div>
   
    <p id="location-feature"> Here you can get the location of the clinics!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat emaxime accusantium hic enim? Veniam, dolore laudantium repellendus debitis, doloremque quam possimus pariatur est laborum numquam qui eum ut. Possimus, nostrum alias. </p>
    </div>

    <div className="end">
      <p className="thankyou">
        Thank You! 
      </p>
    </div>
  </div>
  )
}
