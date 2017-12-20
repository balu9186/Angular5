
var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/newsql',function(req,res){

  var sql = require("mssql");

  var config={
    user:"sa",
    password:"Test123!",
    server:"localhost",
    database:"Angular5"
  };

  sql.connect(config,function (err) {
    if(err){
      console.log(err);
    }
    else{
      var request = new sql.Request();

      /*//Data retrieving directly from table
      request.query('select * from tbl_Products',function(err,recordsArray){*/

      ///Data retrieving from Stored Procedure
      request.execute('stp_tbl_Products_Get',function(err,recordsArray){

          if(err){
          console.log(err);
        }
        else{
          res.send(recordsArray);
          sql.close();
        }
      })
    }
  })

});

app.listen(8080);
console.log("server listening SQL data from port no. 8080");
