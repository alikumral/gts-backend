const mongoose = require('mongoose');

const { Schema } = mongoose;

const craneAdsSubscriptionSchema = new Schema({
  type: { type: String, required: true, trim: true, unique: true },
  price: { type: Number, required: true, min: 0 },
  yearlyPrice: { type: Number, min: 0 },
  features: [{ type: String, trim: true }],
}, { timestamps: true });

module.exports = mongoose.model('CraneAdsSubscription', craneAdsSubscriptionSchema);
