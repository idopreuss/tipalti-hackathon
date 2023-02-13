const express = require('express');
const app = express();

app.get('/cards', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
   res.json({key:"value"});
});


app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
   res.json({key:"value"});
});

app.listen(8080, function() {
  console.log('Web service listening on port 8080');
});

