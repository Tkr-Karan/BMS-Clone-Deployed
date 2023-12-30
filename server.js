const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 8080;

const app = express();

require("dotenv").config();
const db = require("./config/dbConfig");

// using the routes
const userRoutes = require("./routes/userRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
app.use(express.static("./public"));

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies", moviesRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`your server is running fine at ${PORT}`);
});
