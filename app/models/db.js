require("dotenv").config();
const mysql = require("mysql2/promise");

// 동시 10곳 접속 가능한 Pool
exports =  mysql.createPool({
    connectionLimit: 10,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
})