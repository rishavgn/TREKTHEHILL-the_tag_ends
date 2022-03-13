const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const dotenv = require('dotenv');
const cors = require('cors')

const usersRouter = require("./routes/api/users");
const contactRouter = require("./routes/api/contacts");
const patientRouter = require("./routes/api/patients");
// payment
const paymentRoutes = require("./routes/api/payment")
const config = require('config');
const app = express();
// Body parser middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(cors());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/patients", patientRouter);


app.use("/api/payment", paymentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
