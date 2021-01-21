require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;
const userRoutes = require("./routes/users.js");

const server = express();

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database."));

server.use(express.json());
server.use("/users", userRoutes);

server.listen(5000, () => {
  console.log("Server Listening in http://localhost:5000");
});