var insertSeat = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

insertSeat.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "INSERT INTO seats VALUES($1,$2,$3);",
    values: [
      req.body.AircraftCode,
      req.body.SeatNumber,
      req.body.FairCondition,
    ],
  };

  await client
    .query(query)
    .then((res) => response.send("done"))
    .catch((e) => console.error(e.stack));
});

module.exports = insertSeat;
