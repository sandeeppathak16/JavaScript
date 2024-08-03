const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const n = req.query.n;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  res.send(`sum of ${n} number is ${sum}`);
});

app.listen(port);
