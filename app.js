const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');   
var client = require("./Config/Config");
const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use("/adddata", require("./Router/adddata"));

app.use("/view", require("./Router/viewdata"));

app.use("/updateData", require("./Router/updategetdata"));

app.use("/update", require("./Router/updatedata"));

app.use("/insertSeat", require("./Router/insertSeat"));

