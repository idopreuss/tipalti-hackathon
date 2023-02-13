const express = require('express');
const app = express();
const card = require('./cards')


app.get('/cards', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
   res.json({card:card});
});


app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
   res.json({key:"value"});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

