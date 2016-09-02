var express = require('express');

var app = express();

app.get('/', function(req, resp){

  resp.send('Hello Express!');

});

console.log('server running port http://localhost:3000');
app.listen(3000);
