const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  label: { type: String, trim: true },
  street: { type: String, required: true, trim: true },
  street2: { type: String, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, trim: true },
  postalCode: { type: String, trim: true },
  country: { type: String, required: true, trim: true },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      validate: {
        validator(value) { return !value || value.length === 2; },
        message: 'Coordinates must be [lng, lat]',
      },
    },
  },
}, { timestamps: true });

addressSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Address', addressSchema);
