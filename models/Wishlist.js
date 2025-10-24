const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  craneAd: { type: Schema.Types.ObjectId, ref: 'CraneAd' },
  rating: { type: Number, min: 1, max: 5 },
  text: { type: String, trim: true },
  notes: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);
