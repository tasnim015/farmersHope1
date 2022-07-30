const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  age: {
    type: Number,
    reuire: true,
  },
  address: {
    type: String,
    reuire: true,
  },
  contactNo: {
    type: String,
    reuire: true,
  },
});

module.exports = mongoose.model("customer", customerSchema);