const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// createing the format of data means data structure
 const userSchema = new mongoose.Schema({
     name:{
         type: String,
         required: true
     },
     email:{
         type: String,
         required: true
     },
     pass:{
         type: String,
         required: true
     },
     cpass:{
         type:String, 
         required: true
     },
     tokens: [
         {
             token:{
                type: String,
                required: true
             }
         }
     ]
 })

 userSchema.pre('save',async function(next){
    if(this.isModified('pass')) {
       this.pass =await bcrypt.hash(this.pass, 12);
       this.cpass = await bcrypt.hash(this.cpass, 12);
    }
    next();
 });

 userSchema.methods.generateAuthToken = async function(){
     try{
         let token =jwt.sign({_id:this._id}, process.env.SECRET_KEY);
         this.tokens= this.tokens.concat({token: token});
         await this.save();
         return token;
     }
        catch(err){
         console.log(err);
        }
     
 }

 // create model to connect this data structure with server databas

 const User = mongoose.model('USERS', userSchema);
 //exporting elsewhere
 module.exports = User;

 //hashing

