const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://wikette:Dogplanet2@cluster0.vjgsf.mongodb.net/wickette-blog?retryWrites=true&w=majority',
  {

  }
);

module.exports = mongoose.connection;