const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.use("/healthcheck", (req, res) => res.send("OK"));

app.get("/api/message", async (req, res) => {
  const responseBackend2 = await axios.get(
    "http://localhost:19020/api/message"
  );

  res.json({
    msgBackend1: "Hello from backend1",
    msgBackend2: responseBackend2.data,
  });
});

app.listen(19010, () => console.log("Server is running on port 19010"));
