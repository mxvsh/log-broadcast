const express = require("express");
const app = express();

app.use(async (req, res) => {
  console.log(req.url);
  res.json({ worked: true });
});

app.listen(6000);
