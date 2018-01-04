var config = require("./config");

/*var mssql = require("mssql");*/

module.exports = {
  "dbconn" : [{
  host:config.host,
  user:config.user,
  password:config.password,
  database:config.database,
  connectionLimit:config.connectionLimit,
  token:config.token
  }]
}

/*module.exports={
  "getConnection":function(){
    return mssql.connect(dbconn);
  }
}*/
