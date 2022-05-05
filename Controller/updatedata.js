var updataData = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

updataData.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "UPDATE seats SET fare_conditions= $1 WHERE aircraft_code = $2 and seat_no = $3 and fare_conditions = $4 ;",
    values: [
      req.body.FairCondition,
      req.body.AircraftCode,
      req.body.oldSeatNumber,
      req.body.oldFairCondtion
    ],
  };

  await client
    .query(query)
    .then((res) => response.send("done"))
    .catch((e) => console.error(e.stack));
});

module.exports = updataData;
