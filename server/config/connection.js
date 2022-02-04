const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
    process.env.MONGODB_URI || 
    process.env.MONGO_URL, {

});

module.exports = mongoose.connection;