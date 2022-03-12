import React from 'react'
import jsPDF from 'jspdf';

export default function Patient() {
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

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(user)
    }

    
   function pdfGenerate(event){
    const {name, email, password, confPass} = event.target;
    var doc = new jsPDF('potrait', 'px', 'a4', 'false');
    doc.setFont('Roboto','bold')
    doc.text(60, 60, name)
    doc.text(100, 60, email)

    doc.save('a.pdf')
}
  return (
    <div>
          <button onClick={pdfGenerate}>pdf</button>
     <h2>Fill the details</h2>

     <form onSubmit={handleSubmit}>
                
                <div className="email_div">
                    <label htmlFor="name" id="head_lablel">Name</label>
                    <input id='head_input' type="text" name='name' placeholder='Your Name' 
                    value={user.name}
                    onChange={handlechange}/>
                </div>


                <div className="email_div">
                <label id='head_label' htmlFor="email">Age</label>
                <input id='head_input' type="number" name='age' placeholder='Enter your age'
                value={user.age} 
                onChange={handlechange}
                />
                </div>
                <div className="email_div">
                <label id='head_label' htmlFor="email">Weight</label>
                <input id='head_input' type="number" name='weight' placeholder='Enter your weight'
                value={user.weight} 
                onChange={handlechange}
                />
                </div>
                <div className="email_div">
                <label id='head_label' htmlFor="email">Height</label>
                <input id='head_input' type="number" name='height' placeholder='Enter your Height'
                value={user.height} 
                onChange={handlechange}
                />
                </div>

                <div className="email_div">
                <label id='head_label' htmlFor="email">queries</label>
                <textarea 
                value={user.comments}
                placeholder="Write your Queries"
                onChange={handlechange}
                name="comments"
               />
               </div>

               <button className='btn_login'>Submit</button>

            </form>

    </div>
  )
}
