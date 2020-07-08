const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/battle", (req, res) => {
    res.sendFile(__dirname + "/public/pages/Battle.html");
});

app.listen(3000, console.log("Server started. PORT: 3000"))