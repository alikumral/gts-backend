const mongoose = require('mongoose');

const { Schema } = mongoose;

const directMessageSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true, trim: true },
  attachments: [{ type: String, trim: true }],
  sentAt: { type: Date, default: Date.now },
  readAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('DirectMessage', directMessageSchema);
