const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`<h1>Hi there from / folder (PORT=${port})</h1>`);
});

app.get("/app", (req, res) => {
    res.send(`<h2>Hi there from /app folder (PORT=${port})</h2>`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
