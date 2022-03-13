const express = require('express');
const Router = express.Router();
const config = require('config');



// Load User model

const Contact = require('../../models/Contact');

//Post Router api/users/register
Router.post('/home', (req, res) => {
    //Form Validation
    //Destructuring Values
              const newContact = new Contact({
                    name: req.body.name,
                    email: req.body.email,
                    queries: req.body.queries
                });

              
                        newContact.save()
                            .then(contact => res.json(contact)
                                // res.redirect('/users/login')
                            )
                            .catch(err => console.log(err));
                 
                
});


module.exports = Router;