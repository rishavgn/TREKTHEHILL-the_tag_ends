const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express');
const paymentRoutes = require("./router/payment")
const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());  // express get the json data and convert into readable objects
// we link the router file hereq

app.use(cors());

app.use("/api/payment", paymentRoutes);
app.use(require('./router/auth'));

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server started ${PORT}`);
})