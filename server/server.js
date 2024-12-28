// server.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "", // your MySQL password
  database: "films", // your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected!");
});

// Endpoint to fetch data
app.get("/api/data", (req, res) => {
  db.query("SELECT * FROM your_table_name", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
