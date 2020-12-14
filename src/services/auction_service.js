const Auction = require('../models/auction');

const registerNewBid = async (
  {
    name, phoneNumber, amount, auctionId,
  }) => {
  const auction = await Auction.findById(auctionId);
  if (!auction || auction.amount >= amount) return auction;

  auction.highestBidder.phoneNumber = phoneNumber;
  auction.highestBidder.name = name;
  auction.amount = amount;
  await auction.save();
  return auction;
};
// }) => Auction.findOneAndUpdate(
// { _id: auctionId, amount: { $lt: amount } },
// { 'highestBidder.name': name, 'highestBidder.phoneNumber': phoneNumber, amount },
// { new: true },

const createAuction = async (auction) => {
  auction = new Auction(auction);
  await auction.save();
  return auction;
};

module.exports = {
  registerNewBid,
  createAuction,
};