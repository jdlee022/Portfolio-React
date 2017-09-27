const express = require('express');
const morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();


// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
// var blogRoutes = require('./routes/blog-routes')(app);
// app.use('/', blogRoutes);
require("./routes/blog-routes.js")(app);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;