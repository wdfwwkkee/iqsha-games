const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const PORT = 5000;
const http = require("http").Server(app);
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const urlencodedParser = express.urlencoded({ extended: false });

app.post("/iqsha-games/api", urlencodedParser, (req, res) => {
  const userData = req.body;
  var file = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  userData.id = Date.now()
  file.push(userData)
  fs.writeFileSync('data.json', JSON.stringify(file, null, 2));

  res.send(userData);
});

http.listen(PORT, () => {
  console.log(`Server working on ${PORT} port `);
});
