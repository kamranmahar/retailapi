const mysql = require("mysql");
var mySqlConnection = mysql.createConnection({
    host : "34.67.30.151",
    user :"root",
    password : "Kamran@1234",
    database : "trango",
    multipleStatements : true
});

mySqlConnection.connect((err) => {
    if(!err){
        console.log("Connected");
    }else
    {
        console.log(err);
    }

});

module.exports = mySqlConnection;