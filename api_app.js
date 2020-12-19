const app = require('express')();
const bodyParser = require('body-parser');
const connectMongoBD = require('./src/services/connect');

app.use(bodyParser.json());

const startApplication = async () => {
  const { auctionService } = await connectMongoBD(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bids');
  app.get('/auctions', async (req, res) => {
    const auctions = await auctionService.getAuctions();
    res.status(200).json(auctions);
  });

  app.post('/auctions', async (req, res) => {
    const auction = {
      start: req.body.start,
      end: req.body.end,
      description: req.body.description,
      image: req.body.image,
    };
    const result = await auctionService.createAuction(auction);
    res.status(200).json(result);
  });
  return app;
};

module.exports = startApplication;
