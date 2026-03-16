"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var sqlite3 = require("sqlite3");
var app = express();
app.use(express.json());
var db = new sqlite3.Database("./database.db");
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.get("/cats", function (req, res) {
    db.all("SELECT * FROM cats", function (err, rows) {
        res.send(rows);
    });
});
app.get("/cats/:id", function (req, res) {
    var id = req.params.id;
    db.get("SELECT * FROM cats WHERE id = ?", id, function (err, row) {
        if (row) {
            res.send(row);
        }
        else {
            res.sendStatus(404);
        }
    });
});
app.post("/cats", function (req, res) {
    var _a = req.body, name = _a.name, feature = _a.feature;
    db.run("INSERT INTO cats (name, feature) VALUES (?, ?)", [name, feature], function () {
        res
            .setHeader("Location", "http://localhost:3000/cats/".concat(this.lastID))
            .sendStatus(201);
    });
});
app.put("/cats/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, name = _a.name, feature = _a.feature;
    db.run("UPDATE cats SET name = ?, feature = ? WHERE id = ?", [name, feature, id], function () {
        res.sendStatus(204);
    });
});
app.delete("/cats/:id", function (req, res) {
    var id = req.params.id;
    db.run("DELETE FROM cats WHERE id = ?", id, function () {
        res.sendStatus(204);
    });
});
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
