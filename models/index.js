const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.flowers = require('./flowers.js')(mongoose);
db.recipes = require('./recipes.js')(mongoose);
db.users = require('./users.js')(mongoose);

module.exports = db;