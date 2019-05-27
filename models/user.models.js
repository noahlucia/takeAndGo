const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  lastName: String,
  birthday: Date,
  phone: Number,
  homeAddress: String,
  workAddress: String,
  imgName: String,
  imgPath: String,
}, {
    timestamps: true
  })

const User = mongoose.model('User', userSchema);
module.exports = User;
