require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const drinks = require("./models/drinks.js");



app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req,res) => {
  res.render("drinks_index.ejs", {
    allDrinks: drinks,
  });
});

app.get("/drinks/:id", (req,res) => {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`Have no fear! For I am listening, Port ${PORT}`);
});