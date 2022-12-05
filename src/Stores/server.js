const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 3001;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "access-management",

  // server Ecom
  //   connectionLimit: 50,
  //   user: "question",
  //   host: "203.170.129.195",
  //   password: "Black26114!",
  //   database: "meso_question",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

// app.post("/insert", (req, res) => {});

app.get("/question", (req, res) => {
    db.query("SELECT * FROM am_category_products", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/allcategory", (req, res) => {
  db.query(
    "SELECT * FROM am_category_products ORDER BY cat_id DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log("Server running successfully on 3001");
});
