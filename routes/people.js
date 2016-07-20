var router=require('express').Router();
var bodyParser= require('body-parser');
var pg=require('pg');
var config={
  database: 'patronuses',
  port: 5432
};

router.get('/', function(request,response){
  var client= new pg.Client(config);

  client.connect(function(err){
    if(err){
      console.log(err);
    }
    client.query('SELECT * FROM people', function(err, result){
      if(err){
        console.log(err);
      }
      else {
        console.log('success');
        response.send(result);
      }
      client.end(function(err){
        if (err){
          console.log('disconnect', err);
        }
      })
    })
  })
});
router.post('/', function(request, response){
  var client= new pg.Client(config);
  var name = request.body.first_name;
  console.log(name);
  client.connect(function(err){
    if(err){
      console.log(err);
    }
    client.query('INSERT INTO people (first_name) Values ($1)',[name], function(err){
      if(err){
        console.log(err);
      }
      else {
        console.log('success');
        response.sendStatus(200);
      }
      client.end(function(err){
        if (err){
          console.log('disconnect', err);
        }
      })
    })
  })
});
// router.put('/personid', function(request, response){
//
// });

module.exports=router;
