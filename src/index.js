const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// const spawn = require("child_process").spawn,
//   ls = spawn("node", ["src/test.js"]);

// ls.stdout.on("data", function (data) {
//   console.log("stdout: " + data.toString());
// });

io.on("connection", (socket) => {
  console.log("a user connected");
});
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

http.listen(7500, () => console.log("http://localhost:7500"));
