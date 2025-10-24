const mongoose = require('mongoose');

const { Schema } = mongoose;

const creditCardSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  provider: { type: String, trim: true },
  holderName: { type: String, trim: true },
  last4: { type: String, required: true, minlength: 4, maxlength: 4 },
  expMonth: { type: Number, min: 1, max: 12 },
  expYear: { type: Number },
  billingAddress: { type: Schema.Types.ObjectId, ref: 'Address' },
}, { timestamps: true });

module.exports = mongoose.model('CreditCard', creditCardSchema);
