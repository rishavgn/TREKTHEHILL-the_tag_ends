const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  doctorname: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  }
});

const Patient = mongoose.model('patient', PatientSchema);

module.exports = Patient;