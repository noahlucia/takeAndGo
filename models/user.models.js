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
  imgName: { type: String, default: "doraemon.png" },
  imgPath: { type: String, default: "http://res.cloudinary.com/lulas/image/upload/v1558625341/tumblr-Lucia/doraemon.png.png" },
  originCoordinates: [Number],
  destinationCoordinates: [Number],
}, {
    timestamps: true
  })

userSchema.index({ location: '2dsphere' })


const User = mongoose.model('User', userSchema);
module.exports = User
