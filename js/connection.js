var mysql = require('promise-mysql'),
config = require('./config.js');
console.log("User",config.user);
console.log("Password",config.password);
console.log("Database",config.database);
myRes = function(sql,callback){
    mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    }).then(function(conn){
        var result = conn.query(sql);
        conn.end();
        return result;
    }).then(function(rows){
        callback(rows);
    });    
}
module.exports = {
    salesdata: myRes
};