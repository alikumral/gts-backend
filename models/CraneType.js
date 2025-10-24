const mongoose = require('mongoose');

const { Schema } = mongoose;

const craneTypeSchema = new Schema({
  title: { type: String, required: true, trim: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('CraneType', craneTypeSchema);
