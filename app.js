require('dotenv').config()
const express = require('express');
const { Client } = require('pg');
const app = express();
//creating a client intance to connect to PostgreSQL, this is a socket
client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
});

//connecting the client instance
client.connect()


app.get('/', function (request, response) {
  result={};
  client.query('SELECT now()', (err, res) => {
    if (err){
      console.log(`Error: ${err}`);
    }else{
      //destructuring the results
      [result]=res.rows;
      // console.log(`Result: ${result}`);
      response.json(result);
    }
  });
})

app.listen(process.env.PORT,()=>{
console.log("connected on port "+process.env.PORT);
});