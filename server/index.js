const bodyParser = require('body-parser');
const express = require('express');

const path = require('path')

const massive = require('massive');
require('dotenv').config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))

if (ENV == 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.use("/api/cities", require('../api/cities.js'));
app.use("/api/weather", require('../api/weather-api.js'))

app.listen(PORT,() =>{
    console.log(`server running at http://localhost:${PORT}`)
})

module.exports=app;