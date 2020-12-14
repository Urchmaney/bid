/* eslint-disable no-underscore-dangle */
const connect = require('../src/services/connect');

let service = null;

beforeAll(async () => {
  const { auctionService } = await connect(global.__MONGO_URI__);
  service = auctionService;
});

test('registering new bid', async () => {
  const auction = {
    description: 'Test',
    start: new Date(),
    end: (new Date()).setTime((new Date()).getTime() + (2 * 60 * 60 * 1000)),
  };
  let dAuction = await service.createAuction(auction);
  let bid = {
    name: 'Micheal', phoneNumber: '0865363', amount: 200, auctionId: dAuction._id,
  };
  dAuction = await service.registerNewBid(bid);
  expect(dAuction.amount).toBe(200);
  expect(dAuction.highestBidder.name).toBe('Micheal');

  bid = {
    name: 'Lucmon', phoneNumber: '0865333', amount: 200, auctionId: dAuction._id,
  };
  dAuction = await service.registerNewBid(bid);
  expect(dAuction.amount).toBe(200);
  expect(dAuction.highestBidder.name).toBe('Micheal');

  bid = {
    name: 'Urchmaney', phoneNumber: '08164292882', amount: 1000, auctionId: dAuction._id,
  };
  dAuction = await service.registerNewBid(bid);
  expect(dAuction.amount).toBe(1000);
  expect(dAuction.highestBidder.name).toBe('Urchmaney');
});
