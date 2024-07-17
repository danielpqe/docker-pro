const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/", express.static("public"));

app.use("/healthcheck", (req, res) => res.send("OK"));

app.get("/api/config", (req, res) =>
  res.json({ backend1: "http://localhost:19010/api/message" })
);

app.listen(19000, () => console.log("Server is running on port 19000"));
