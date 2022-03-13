const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//backend router

const router = express.Router();
require('../db/conn');
const User = require("../model/userSchema");
router.get('/', (req, res)=>{
    res.send("this is hello from a server!")
  });

 // using async and await //

  router.post('/register', async (req, res)=>{
      const {name, email, pass, cpass} = req.body;
 
            if(!name || !email || !pass || !cpass){
                return res.status(422).json({error: "invalid!!"});
            }

            try{
            const userExist = await User.findOne({email:email}); 
                 if(userExist){
                   return res.status(422).json({error: "Email already exist!"});
                  }
                  else if(pass != cpass){
                    return res.status(422).json({error: "pass not match"});
                  } else{
                    const user = new User({name, email, pass, cpass});

                    // password hashing
                      
    
                    // saving the data to database
                    const useregister = await user.save();
                    if(useregister) {
                      res.status(201).json({message: "user registered successfully"});
                     }
                     else{
                       res.status(500).json({error: "failed to register"})
                     }
                  }
             
            }
            catch (err){
             console.log(err);
            }
   });

   //login route

   router.post('/signin', async (req, res)=>{
    //  console.log(req.body);
    //  res.json({ message: "awesome"});

           try{
           const {email, pass} = req.body;
           if(!email || !pass)
           {
             return res.status(400).json({error:"fill the data"})
           }

           const userLogin = await User.findOne({email:email});
             if(userLogin){
               const isMatch = await bcrypt.compare(pass, userLogin.pass);
               const token =await userLogin.generateAuthToken();
             console.log(token);
 //  token ko store krke rakhna h jisse hum ko  ek bar login krne ke baad fir se naa krna pade
             res.cookie("jwtoken", token, {
               expires: new Date(Date.now()+ 258920000),
               httpOnly:true
             });

               if(!isMatch)
               {
                 res.status(400).json({error:"user error"});
               }
                 else{
                      res.json({message:"user sigin success!"});
                      }
                    }
                  
                      else{
                        res.status(400).json({error: "Invalid credientials"});
                      }
           }
           catch(err){
             console.log(err);
           }
   })
   module.exports = router;





   //using promises
//  router.post('/register', (req, res)=>{
//   //   console.log(req.body);
//   //   res.json({message: req.body});
//     // res.send("my registration page");
//     const {name, email, phone, pass, cpass} = req.body;
//
//           if(!name || !email || !phone || !pass || !cpass){
//               return res.status(422).json({error: "invalid!!"});
//           }
//// user is taken from usershcema
//  User.findOne({email:email})  // this will return promise   this will return either fullfilled or not fulfilled
//  .then((userExist)=>{
//      if(userExist){
//        return res.status(422).json({error: "Email already exist!"});
//       }
//  // if the user is new we need to creeate new instance
//       const user = new User({name, email, phone, pass, cpass});
//       user.save().then(()=>{
//         res.status(201).json({message: "user registered successfully"});
//       }).catch((err)=> res.status(500).json({error: "failed to register"}));
//  }).catch(err => {console.log(err);})
//
//  });
//
//  module.exports = router;