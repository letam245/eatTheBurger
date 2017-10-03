// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.CLEARDB_DATABASE_URL){
    connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME
    })
} else{
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "chibalun83",
        database: "burgers_db"
    });
};

// var connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "chibalun83",
//     database: "burgers_db"
// });

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
