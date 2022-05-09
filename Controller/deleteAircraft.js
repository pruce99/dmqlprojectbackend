var deleteAircraft = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

deleteAircraft.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "delete from aircrafts where aircraft_code=$1;",
    values: [req.body.AircraftCode],
  };

  await client
    .query(query)
    .then((res) => response.send("done"))
    .catch((e) => console.error(e.stack));
});

module.exports = deleteAircraft;
