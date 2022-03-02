const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT||3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Bajaj Finserv Hiring Backend Testing");
});

app.post("/bhfl", (req, response) => {
  var arr= req.body.data;
  console.log(arr[0]);
  //req.body.data = req.body.data.replace(",", "");
  
  var res = {};
  var numbers = [];
  var alphabets = [];
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      numbers.push(arr[i]);
    } else if (
      (arr[i] >= "a" && req.body.data[i] <= "z")
    ) {
      alphabets.push(arr[i]);
    }
  }

  res["is_success"] = true;
  res["user_id"] = "codequotient";
  res["email"] = "check____.cse19@chitkara.edu.in";
  res["roll_nunmber"] = "181089999";
  res["numbers"] = numbers;
  res["alphabets"] = alphabets;

  response.send(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});