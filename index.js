const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hi there from WebRoot</h2>");
});

app.get("/app", (req, res) => {
    res.send("<h2>Hi there from /app folder</h2>");
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
