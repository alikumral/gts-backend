const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
