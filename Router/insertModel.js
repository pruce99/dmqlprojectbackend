var route = require("express").Router();
route.use("/data", require("../controller/insertModel"));

module.exports = route;