const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'AccidentAlert'
});

module.exports = dbConnection.promise();