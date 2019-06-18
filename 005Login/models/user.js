const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    reuqired: True
  },
  email: {
    type: String,
    reuqired: True
  },
  password: {
    type: String,
    reuqired: True
  },
  date: {
    type: string,
    reuqired: Date.now
  }
});

const User = mongoose.model("User", UserSchema);
