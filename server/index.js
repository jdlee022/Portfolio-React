'use strict';

const app = require('./app');

const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

