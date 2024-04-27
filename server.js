const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = 8080;

const app = express();

require("dotenv").config();
const db = require("./config/dbConfig");

// using the routes
const userRoutes = require("./routes/userRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
const theatresRoutes = require("./routes/theatreRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.static("./public"));
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/movies", moviesRoutes);
app.use("/api/theatres", theatresRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`your server is running fine at ${PORT}`);
});
