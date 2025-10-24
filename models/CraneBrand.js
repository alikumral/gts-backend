const mongoose = require('mongoose');

const { Schema } = mongoose;

const craneBrandSchema = new Schema({
  title: { type: String, required: true, trim: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('CraneBrand', craneBrandSchema);
