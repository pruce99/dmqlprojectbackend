// var viewData = require("express").Router();
// var client = require("../config/config");

// viewData.post("/", (req, res) => {
//   client.query(`Select * from aircrafts;`, (err, response) => {
//       console.log(response.rows,"ddf")
//       console.log(err)
//     res.send(response.rows);
//   });
// });
// module.exports = viewData;

var viewData = require("express").Router();
const { response } = require("express");
var client = require("../config/config");

viewData.post("/", async (req, response) => {
  const query = {
    // give the query a unique name
    text: "SELECT B.book_date, B.total_amount, P.last_name, P.first_name, P.contact_no, TF.amount, TF.fare_conditions, BP.seat_no, BP.boarding_no, F.status, F.scheduled_departure, F.scheduled_arrival, F.actual_arrival, F.actual_departure, F.aircraft_code, F.departure_airport, F.arrival_airport, F.flight_no FROM Bookings B, Tickets T, Passenger P, Ticket_flights TF, Boarding_passes BP, Flights F WHERE  B.book_ref = $1 and T.ticket_no = $2 and P.passenger_id = T.passenger_id and T.ticket_no = TF.ticket_no and TF.ticket_no = BP.ticket_no and TF.flight_id = BP.flight_id and TF.flight_id = F.flight_id",
    values: [req.body.bookingReference, req.body.ticketNumber],
  };
  await client
    .query(query)
    .then((res) => response.send(res.rows))
    .catch((e) => console.error(e.stack));
});

module.exports = viewData;
