var deleteBooking = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

deleteBooking.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "delete from bookings where book_ref=$1;",
    values: [
      req.body.BookingRef,
    ],
  };

  await client
    .query(query)
    .then((res) => response.send("done"))
    .catch((e) => console.error(e.stack));
});

module.exports = deleteBooking;
