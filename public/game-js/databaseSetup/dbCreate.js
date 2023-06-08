const mysql = require("mysql");
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
con.connect(function(err){
    if (err) throw err;
    con.query("CREATE DATABASE IF NOT EXISTs game_js", function(err, result){
        if(err) throw err;
        console.log("Database created")
    });

});