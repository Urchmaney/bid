const { connect, connection } = require('mongoose');
const auctionService = require('./auction_service');

const mongoConnect = async (URI) => {
  await connect(URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    err => {
      if (err) {
        process.exit(1);
      }
    });
  return {
    auctionService,
    closeConnect: () => connection.close(),
    db: connection.db,
  };
};

module.exports = mongoConnect;