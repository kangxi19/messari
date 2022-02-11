const { Client } = require('pg');
require('dotenv').config()
client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
});
client.connect()
client.query('SELECT now()', (err, res) => {
  if (err){
    console.log(`Error: ${err}`);
  }else{
    //destructuring the results
    [result]=res.rows;
    console.log(`Result: ${result}`);
  }
  client.end();
});