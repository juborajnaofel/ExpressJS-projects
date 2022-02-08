const mysql = require('mysql2')



module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testexpress',
})
console.log(module.exports)
