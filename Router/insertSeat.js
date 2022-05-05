var route = require("express").Router();
route.use("/data", require("../controller/insertSeat"));

module.exports = route;