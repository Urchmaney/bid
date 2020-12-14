const { Schema, model } = require('mongoose');

const Auction = new Schema({
  description: { type: String },
  image: { type: String },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  highestBidder: {
    name: { type: String },
    phoneNumber: { type: String },
  },
  amount: { type: Number, default: 0 },
});

module.exports = model('auctions', Auction);