import React from 'react';
import './home.css';

export default function Home() {
  const [user, setuser] = React.useState({
    name: "",
    email: "",
    comments: "",
  })
  function handlechange(event) {
    const { name, value } = event.target
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
    console.log(user)
  }
  return (
    <div className="main_box">
      <div className="main_box_child-1">
        <div className="left_box">
          <h1>Welcome to  Medic Portal</h1>
          <h2>Apex Hospital</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum possimus expedita minima odio praesentium atque, voluptates saepe perspiciatis delectus sed iure, obcaecati quod numquam sequi labore itaque dignissimos pariatur qui. Hic incidunt, a tempora at sapiente nobis alias cumque assumenda dolor delectus quia vero enim saepe nostrum ullam? Corrupti!</p>
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
      <p id="location-feature">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos hic nesciunt vel at modi error, ipsa veniam non dolores consequuntur suscipit nihil tenetur assumenda. Consequuntur quis officia est error nulla!</p>
      </div>

      <div className="end">
        <p className="thankyou">
          Thank You! 
        </p>
      </div>
    </div>
  )
}
