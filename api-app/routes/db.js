const mysql = require('mysql2')



module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hello',
    database: 'testexpress',
})
console.log(module.exports)