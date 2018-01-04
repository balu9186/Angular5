var db = require("./db-config");

/*connection.connect();*/

var express = require("express");
var app = express();



app.get('/mssqlex1',function(req,res){
  var mssql = require("mssql");
  mssql.connect(db.dbconn,function(err){
    if(err){
      console.log(err);
    }
    else{
      var request = new mssql.Request();
      request.query('select * from tbl_Products',function(err,recordsArray){
        if(err){
          console.log("error");
          return;
        }
        res.send(recordsArray);
        mssql.close();

      });
    }
  });

});

app.listen(8080);
console.log("server listening port no 8080 from mini project SQL server");
