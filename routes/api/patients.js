const express = require('express');
const Router = express.Router();
const config = require('config');



// Load User model

const Patient = require('../../models/Patient');

//Post Router api/users/register
Router.post('/card', (req, res) => {
    //Form Validation
    //Destructuring Values
              const newContact = new Patient({
                    doctorname: req.body.doctorname,
                    date: req.body.date,
                   problem: req.body.problem
                });

              
                        newContact.save()
                            .then(patient => res.json(patient)
                                // res.redirect('/users/login')
                            )
                            .catch(err => console.log(err));
                 
                
});


module.exports = Router;