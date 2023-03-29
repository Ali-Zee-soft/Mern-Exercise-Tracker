const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
},
  {
    timestamps: true,

  })

const Userslogin = mongoose.model('Userslogin', emailSchema);

module.exports = Userslogin;
