const express = require("express");
const app = express();

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

app.get("/getSree", (req, res) => {
  res.send({ message: "checking of https" });
});
let PORT = 3000;
https
  .createServer(options, app)
  .listen(PORT, console.log(`server runs on port ${PORT}`));

// https
//   .createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
//   })
//   .listen(3000);
