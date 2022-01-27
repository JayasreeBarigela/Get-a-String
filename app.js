const express = require("express");

const obj = express();
obj.get("/", (request, response) => {
  response.send("Express JS");
});

obj.listen(3000);

module.exports = obj;
