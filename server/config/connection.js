const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/wickette-blog',
  {

  }
);

module.exports = mongoose.connection;