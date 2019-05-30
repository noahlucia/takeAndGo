const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  creatorID: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  originNeighb: String,
  destNeighb: String,
  origin: String,
  originCoordinates: [Number],
  destination: String,
  destinationCoordinates: [Number],
  day: Date,
  time: String,
  passengers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  maxPassengers: Number,
  price: String,
  description: String,
  smoker: Boolean,
  carType: String,
  comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true
  })

tripSchema.index({ location: '2dsphere' })



const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
