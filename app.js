var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send('hello world');
});

app.listen(5050.function(){
  console.log('Server on');
});
