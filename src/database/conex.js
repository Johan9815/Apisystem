const mysql = require('mysql2/promise');
require('dotenv').config()
 
    const connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASS,
            database: process.env.DATABASE,
            port: process.env.PORT,
    });    

    connection.then(()=>{
        console.log('¡Conected to database!')
    }).catch(err=>console.log(err))

 module.exports = connection