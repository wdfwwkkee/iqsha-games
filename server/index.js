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

app.post("/iqsha-games/setData", urlencodedParser, (req, res) => {
  const userData = req.body;
  var file = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const userResults = userData.results;

  

  console.log(userResults);

  console.log(userData);

  // const updatedData = jsonData.map((user) => {
  //   if (user.id === userIdToUpdate) {
  //     return {
  //       ...user,
  //       level: newLevelValue,
  //     };
  //   }
  //   return user;
  // });

  const existIndex = file.findIndex(
    (user) => user.userName === userData.userName
  );
  console.log(existIndex);

  if (existIndex === -1) {
    file.push(userData);
    fs.writeFileSync("data.json", JSON.stringify(file, null, 2));
  } else {
    const copy = file[existIndex];
    const array = copy.results;
    array.push(userResults);
    fs.writeFileSync("data.json", JSON.stringify(file, null, 2));
  }

  res.send(userData);
});

app.get("/iqsha-games/readUsers", urlencodedParser, (req, res) => {
  var file = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  res.send(file);
});

http.listen(PORT, () => {
  console.log(`Server working on ${PORT} port `);
});
