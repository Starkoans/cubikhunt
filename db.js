const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Kurica1609!",
    host: "localhost",
    port: "5432",
    database:"cubikhunt"
});

pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = pool;