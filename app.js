const express = require('express');
const app = express();

const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb+srv://idopreuss:P@rtner2809@meetingrooms.jgn0f7k.mongodb.net/?retryWrites=true&w=majority";

app.get('/cards', function(req, res) {
  res.send('cards mock');
});

app.listen(8080, function() {
  console.log('Web service listening on port 8080');
});

