var express=require('express');
var index=require('./routes/index');
var people=require('./routes/people');
var patronuses=require('./routes/patronuses');
var bodyParser=require('body-parser');
var app=express();

//static files
app.use(express.static('public'));
//remember to do this
app.use(bodyParser.json());
//routes
app.use('/', index);
app.use('/people', people);
app.use('/patronuses', patronuses);

var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on Port', port);
});
