var route = require("express").Router();
route.use("/data", require("../controller/deleteAircraft"));

module.exports = route;