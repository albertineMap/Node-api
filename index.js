// Import express
const express = require('express');
// Initialize the app
const app = express();

// Setup server port
var port = process.env.PORT || 5500;

// Import routes
const apiRoutes = require('./routes/api-route');

// Import database
require('./models/dbConfig')

// Configure bodyparser to handle post requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

 



app.use(bodyParser.json());
app.use('/api', apiRoutes)

app.listen(port,() => console.log('Abie Server started'));