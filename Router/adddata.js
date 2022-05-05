var route = require("express").Router();
route.use("/albumname", require("../controller/adddata"));

module.exports = route;