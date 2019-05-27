const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  creatorID: { type: Schema.Types.ObjectId, ref: 'User' },
  passengers: Number,
  day: Date,
  time: Date,
  origin: {
    type: { type: String },
    coordinates: [Number]
  },
  destination: {
    type: { type: String },
    coordinates: [Number]
  },
  description: String,
  prices: Number,
  carType: String,
  smoker: Boolean
}, {
    timestamps: true
  })



const Trip = mongoose.model('Trip', userSchema);
module.exports = User;
