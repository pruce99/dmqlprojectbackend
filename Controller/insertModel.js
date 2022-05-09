var insertModel = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

insertModel.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "INSERT INTO aircrafts VALUES($1,$2,$3);",
    values: [req.body.AircraftCode, req.body.Model, req.body.Range],
  };

  await client
    .query(query)
    .then((res) => response.send("done"))
    .catch((e) => console.error(e.stack));
});

module.exports = insertModel;
