const mongoose = require('mongoose');

const { Schema } = mongoose;

const craneAdSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  adDate: { type: Date, default: Date.now },
  title: { type: String, required: true, trim: true },
  gallery: [{ type: String, trim: true }],
  youtubeLink: { type: String, trim: true },
  brand: { type: Schema.Types.ObjectId, ref: 'CraneBrand' },
  type: { type: Schema.Types.ObjectId, ref: 'CraneType' },
  model: { type: Schema.Types.ObjectId, ref: 'CraneModel' },
  subModel: { type: String, trim: true },
  manufactureYear: { type: Number },
  weight: { type: Number },
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  description: { type: String, trim: true },
  features: [{ type: String, trim: true }],
}, { timestamps: true });

module.exports = mongoose.model('CraneAd', craneAdSchema);
