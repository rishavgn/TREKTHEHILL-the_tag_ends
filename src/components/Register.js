import React from 'react'
import './register.css';
import jsPDF from 'jspdf';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Register() {
    const history = useNavigate();
    const [user, setuser] = React.useState({
        name:"",
        email:"",
        password:"",
        confPass:"",
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
  const PostData = async (e) => {
  
        e.preventDefault();
        // submitToApi(formData)
        const{name, email, password, confPass} = user;
        try{
        const res = await fetch('http://localhost:5000/register', {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name, email, password, confPass
            })
        });
        console.log(res);
        if(res.status === 422 || !res){
          window.alert("Invalid Registration");
          console.log("invalid registraiton");
      }
      else{
          window.alert("Registraiotn succesful");
          console.log("sucessful registarion");
          history("/login");
      }
      } catch(error) {
  console.log(error)
      }
       
        

      
    }

   

  
   function pdfGenerate(){
        var doc = new jsPDF('potrait', 'px', 'a4', 'false');
        doc.setFont('Roboto','bold')
        doc.text(60, 60, 'Name')
        doc.text(100, 60, ': Rishav')

        doc.save('a.pdf')
    }
  return (
    <div>
        <div className="containe">
            <div className="box_pag">
        <div className="login_card">
        <h2 class="gJPMca">Register as a patient</h2>
            <form method="POST" onSubmit={PostData} >
                
                <div className="email_div">
                    <label htmlFor="name" id="head_lablel">Name</label>
                    <input id='head_input' type="text" name='name' placeholder='Your Name' 
                    value={user.name}
                    onChange={handlechange}/>
                </div>


                <div className="email_div">
                <label id='head_label' htmlFor="email">Email</label>
                <input id='head_input' type="email" name='email' placeholder='Enter your email'
                value={user.email} 
                onChange={handlechange}
                />
                </div>

              

                <div className="password_div">
               <label id='head_label'>password</label>
                <input id='head_input' name='password' type="password" placeholder='Enter your password'
                value={user.password}
                 onChange={handlechange}/>
                </div>

                <div className="password_div">
               <label id='head_label' > confirm password</label>
                <input id='head_input' name='confPass' type="password" placeholder='re-enter your password'
                value={user.confPass}
                 onChange={handlechange}/>
                </div>

               <input type="submit" className='btn_login' value="register"  />

               <NavLink to='/login' className="signup_image">i am already registered</NavLink>
            </form>
            <button onClick={pdfGenerate}>pdf</button>
        </div>
        </div>
        </div>
    </div>
  )
}
