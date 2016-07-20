var express=require('express');
var index=require('./routes/index');
var people=require('./routes/people');
var app=express();

//static files
app.use(express.static('public'));
//routes
app.use('/', index);
app.use('/people', people)

var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on Port', port);
});
