const util = require( 'util' );
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});

mysqlConnection.query = util.promisify(mysqlConnection.query).bind(mysqlConnection);

mysqlConnection.connect(function(err){
    
    if(err){
        console.log(err);
    }else{
        console.log("Bd is connected");
    }
});

module.exports = mysqlConnection;