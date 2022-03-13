const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  queries: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;