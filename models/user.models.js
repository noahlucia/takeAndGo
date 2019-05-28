const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  birthday: Date,
  phone: Number,
  homeAddress: String,
  workAddress: String,
  imgName: String,
  imgPath: String,
  originCoordinates: [Number],
  destinationCoordinates: [Number],
}, {
    timestamps: true
  })

const User = mongoose.model('User', userSchema);
module.exports = User
