const { Pool, Client } = require("pg");
//postgres://YourUserName:YourPassword@localhost:5432/YourDatabase
const connectionString =
  "postgres://postgres:1234@localhost:5432/AIRLINES_DMQL";
const client = new Client({
  connectionString: connectionString,
});

client.connect();

module.exports = client;
