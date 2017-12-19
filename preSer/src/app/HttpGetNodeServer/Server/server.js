
var express=require("express");
var fs=require("fs");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/static",function(req,res){
  fs.readFile("D:/Angular5/preSer/src/app/HttpGetNodeServer/Files/sample.json",function(err,data){
    res.send(data);
  })
  }
);

app.listen(8080);
console.log("server listening port no 8080");
