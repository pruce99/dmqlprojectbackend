var route = require("express").Router();
route.use("/data", require("../controller/viewdata"));

module.exports = route;