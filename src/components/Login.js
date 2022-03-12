import React from 'react'
import './login.css';


export default function Login() {
  const [user, setuser] = React.useState({
    email:"",
    password:"",
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
    // submitToApi(formData)
    console.log(user)
}
  return (
    <div>
    
        <div className="containr">
            <div className="box_pae">
        <div className="login_card">
        <h2 class="gJPMca">Log in as a patient</h2>
            <form onSubmit={handleSubmit} >
                <div className="email_div">
                <label id='head_label' htmlFor="email">Email</label>
                <input id='head_input' name='email' type="email" placeholder='Enter your email'
                 value={user.email} 
                 onChange={handlechange}
                />
                </div>
                <div className="password_div">
               <label id='head_label' htmlFor="password">password</label>
                <input id='head_input' name='password' type="password" placeholder='Enter your password'
                value={user.password}
                onChange={handlechange}
               />
                </div>
                <button className='btn_login'>Signup</button>

            </form>
        </div>
        </div>
        </div>
    </div>
  )
}
