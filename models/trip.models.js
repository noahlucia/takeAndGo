const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  creatorID: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  origin: String,
  originCoordinates: [Number],
  destination: String,
  destinationCoordinates: [Number],
  day: Date,
  time: String,
  passengers: Number,
  price: Number,
  description: String,
  smoker: Boolean,
  carType: String,
}, {
    timestamps: true
  })



const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
