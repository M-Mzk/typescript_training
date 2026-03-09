"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var sqlite3 = require("sqlite3");
var app = express();
var db = new sqlite3.Database("./database.db");
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.get("/cats", function (req, res) {
    db.all("SELECT * FROM cats", function (err, rows) {
        res.send(rows);
    });
});
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
