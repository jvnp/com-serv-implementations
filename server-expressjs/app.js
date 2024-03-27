const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.json({ message: "Initial Server HTTP-GET Response!" });
    next();
});

module.exports = app;