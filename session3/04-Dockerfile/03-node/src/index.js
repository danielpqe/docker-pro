const http = require("http");
const server = http.createServer((req, res) => res.end("Hello World!"));
const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
