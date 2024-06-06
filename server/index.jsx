const mysql = require('mysql');
const config = require('./config/db.js');

function connect() {
    return mysql.createConnection({
        host: config.HOST,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DB,
        charset: config.CHARSET
    });
}

connect().then((conn) => {
    console.log('Connected to MySQL');
    conn.end();
}).catch((err) => {
    console.log('Error connecting to MySQL');
    console.log(err);
});