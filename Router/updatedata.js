var route = require("express").Router();
route.use("/values", require("../controller/updatedata"));

module.exports = route;