const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'what-you-do-today-database.cakpilgd5tuz.ap-northeast-2.rds.amazonaws.com',
    user: 'master',
    port: '3306',
    password: 'retim0330',
    database: 'what_you_do_today_database'
});

module.exports = {
    pool: pool
};