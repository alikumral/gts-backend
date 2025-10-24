const mongoose = require('mongoose');

const { Schema } = mongoose;

const socialLinksSchema = new Schema({
  facebook: { type: String, trim: true },
  instagram: { type: String, trim: true },
  website: { type: String, trim: true },
  youtube: { type: String, trim: true },
  twitter: { type: String, trim: true },
}, { _id: false });

const companySchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  phones: [{ type: String, trim: true }],
  socialLinks: socialLinksSchema,
  craneAdCount: { type: Number, default: 0 },
  craneAds: [{ type: Schema.Types.ObjectId, ref: 'CraneAd' }],
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
