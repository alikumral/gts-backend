const mongoose = require('mongoose');

const { Schema } = mongoose;

const craneModelSchema = new Schema({
  title: { type: String, required: true, trim: true },
  brand: { type: Schema.Types.ObjectId, ref: 'CraneBrand', required: true },
  type: { type: Schema.Types.ObjectId, ref: 'CraneType', required: true },
  subModel: { type: String, trim: true },
}, { timestamps: true });

craneModelSchema.index({ title: 1, brand: 1, type: 1 }, { unique: true });

module.exports = mongoose.model('CraneModel', craneModelSchema);
