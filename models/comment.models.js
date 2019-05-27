const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: String,
  content: String,
  createID: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
  })

const Comment = mongoose.model('Comment', userSchema);
module.exports = User;
