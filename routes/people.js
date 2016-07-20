var router=require('express').Router();
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
router.get('/personid', function(request, response){
  
});
router.post('/', function(requeset, response){

});
router.put('/personid', function(request, response){

});

module.exports=router;
