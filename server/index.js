const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnect = require('./utils/dbconnect');

const app = express();
const port = 3200;



dbconnect.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL server:', err);
      return;
    }
    console.log('Connected to MySQL server.');
});


app.use(bodyParser.json());

// var corsOptions = {
//     origin: "http://localhost:3200"
//   };
  
  app.use(cors());
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

const http = require("http").createServer(app);



function insertdata(tableName, data) {
  const query = `INSERT INTO ${tableName} ( userName, date, lvl, gameName, result) VALUES ( ?, NOW(), ?, ?, ?);`;
  return new Promise((resolve, reject) => {
      dbconnect.query(query, [data.userName, data.lvl, data.gameName, data.result], (error, results) => {
          if (error) {
              reject(error);
          } else {
              resolve(results);
          }
      });
  });
}


app.post('/chess',  (req, res) => {
  console.log(req.body);
    res.send('Hello World!');
    insertdata('Chess', req.body);
  
})

app.post('/logic' ,  (req, res)  =>  {
  console.log(req.body);
  res.send('Hello World!');
  insertdata('Logic', req.body);
})

app.post('/math' ,  (req, res)  =>  {
  console.log(req.body);
  res.send('Hello World!');
  insertdata('Math', req.body);
})






app.listen(port, ()  => {console.log(`Server is running on port ${port}`)});

process.on('SIGINT', () => {
    console.log('Shutting down the server...');
    connection.end(() => {
        console.log('MySQL connection closed.');
        process.exit(0);
    });
});
