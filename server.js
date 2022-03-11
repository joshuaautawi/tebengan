const express = require("express");
const { getAllTrips, createTrips } = require("./controllers");
const app = express();

app.use(express.json({ extended: false, limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
);
app.get("/trip", getAllTrips);
app.post("/trip", createTrips);
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 3009;
app.listen(port, () => console.log("Server listening on port " + port));
