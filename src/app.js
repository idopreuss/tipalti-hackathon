const express = require('express');
const app = express();

app.get('/cards', function(req, res) {
  res.send('cards mock');
});

app.listen(8080, function() {
  console.log('Web service listening on port 8080');
});

