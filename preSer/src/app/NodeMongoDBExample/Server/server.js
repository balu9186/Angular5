
var express=require("express");
var app=express();

var mongodb=require("mongodb");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var baluClient = mongodb.MongoClient;

app.get("/mongoex",function(req,res){
  baluClient.connect("mongodb://localhost:27017/angular2",function(err,db){
    db.collection("products").find().toArray(function(err,result){
      res.send(result);
    });
  });
});

app.listen(8080);
console.log("server listening MongoDB at port 8080");
