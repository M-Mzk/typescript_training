import * as express from "express";
import * as sqlite3 from "sqlite3";

const app = express();
app.use(express.json());

const db = new sqlite3.Database("./database.db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cats", (req, res) => {
  db.all("SELECT * FROM cats", (err, rows) => {
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
