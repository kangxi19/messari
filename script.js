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
  if (!err){

    console.log(res)
  } else{
    console.log(err)

  }
    client.end()
})