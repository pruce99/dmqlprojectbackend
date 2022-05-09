var route = require("express").Router();
route.use("/data", require("../controller/deleteBooking"));

module.exports = route;