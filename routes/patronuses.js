var router=require('express').Router();
var pg = require('pg');
var config = {
    database: "patronuses",
    port: 5432
}

//get all patroni
router.get('/', function(request, response){
    var client = new pg.Client(config);
  client.connect(function(err) {
      if (err) {
          console.log("there was a problem connecting to the database", err);
      }
      client.query("SELECT * FROM patronuses", function(err, result) {
          if (err) {
              console.log("there was a problem in the patronus query", err);
          } else {
              console.log("patronus success");
              console.log(result.rows);
              response.send(result.rows);
          }
          client.end(function(err) {
              if (err) {
                  console.log("There was a disconnection problem!")
              }
          });
      });
  });
});

//get specific patronus
router.get('/personid', function(request, response){

});

add new partronus
router.post('/', function(requeset, response){
  var client = new pg.Client(config);
client.connect(function(err) {
    if (err) {
        console.log("there was a problem connecting to the database", err);
    }
    client.query("INSERT INTO patronuses ("patronus_name") VALUES('*********')", function(err, result) {
        if (err) {
            console.log("there was a problem in the patronus insert", err);
        } else {
            console.log("patronus insert success");
            console.log(result.rows);
            response.send(result.rows);
        }
        client.end(function(err) {
            if (err) {
                console.log("There was a disconnection problem!")
            }
        });
    });
});
});

module.exports=router;
