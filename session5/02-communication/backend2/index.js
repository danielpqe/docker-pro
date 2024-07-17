const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/healthcheck", (req, res) => res.send("OK"));
app.get("/api/message", (req, res) => res.send("Hello from backend2"));
app.listen(19020, () => console.log("Server is running on port 19020"));
