var getData = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

getData.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "SELECT * FROM seats where aircraft_code = $1",
    values: [req.body.AircraftCode],
  };

  await client
    .query(query)
    .then((res) => response.send(res.rows))
    .catch((e) => console.error(e.stack));
});

module.exports = getData;
