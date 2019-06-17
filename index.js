const express = require("express");
const app = express();
const port = 3000;
var logger = require("morgan");
let cors = require("cors");

app.use(logger("dev"));
app.use(cors());

app.use(express.static("public"));
app.get("/", function(req, res) {
  var options = {
    root: __dirname,
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };
  res.sendFile("index.html", options);
});

app.use(function(req, res, next) {
  res.status(404).sendFile("404.html");
});

app.listen(port, function() {
  console.log("app is listening on port" + port);
});
