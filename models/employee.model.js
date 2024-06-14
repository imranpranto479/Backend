const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 100,
    required: true,
  },
  lastName: {
    type: String,
    maxlength: 100,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    maxlength: 100,
    required: true,
  },
  phoneNumber: {
    type: String,
    minlength: 11,
    maxlength: 14,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
