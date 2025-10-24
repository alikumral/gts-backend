const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchema = new Schema({
  title: { type: String, trim: true },
  message: { type: String, trim: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
}, { _id: false });

const historyEntrySchema = new Schema({
  action: { type: String, trim: true },
  metadata: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
}, { _id: false });

const statisticsSchema = new Schema({
  totalAds: { type: Number, default: 0 },
  totalFollowers: { type: Number, default: 0 },
  totalFollowing: { type: Number, default: 0 },
}, { _id: false });

const socialLinksSchema = new Schema({
  facebook: { type: String, trim: true },
  instagram: { type: String, trim: true },
  website: { type: String, trim: true },
  youtube: { type: String, trim: true },
  twitter: { type: String, trim: true },
}, { _id: false });

const userSchema = new Schema({
  fullName: { type: String, required: true, trim: true },
  email: {
    type: String, required: true, unique: true, lowercase: true, index: true, trim: true,
  },
  passwordHash: { type: String, required: true },
  telephone: { type: String, trim: true },
  photoUrl: { type: String, trim: true },
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
  billingAddress: { type: Schema.Types.ObjectId, ref: 'Address' },
  craneSellSubscription: { type: Schema.Types.ObjectId, ref: 'CraneAdsSubscription' },
  adsSubscription: { type: Schema.Types.ObjectId, ref: 'AdsSubscription' },
  squarePartSubscription: { type: Schema.Types.ObjectId, ref: 'SquarePartSubscription' },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  craneAds: [{ type: Schema.Types.ObjectId, ref: 'CraneAd' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  socialLinks: socialLinksSchema,
  creditCards: [{ type: Schema.Types.ObjectId, ref: 'CreditCard' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }],
  directMessages: [{ type: Schema.Types.ObjectId, ref: 'DirectMessage' }],
  notifications: [notificationSchema],
  statistics: statisticsSchema,
  history: [historyEntrySchema],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
