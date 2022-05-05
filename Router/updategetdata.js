var route = require("express").Router();
route.use("/get", require("../controller/updategetdata"));

module.exports = route;