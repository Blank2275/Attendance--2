const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Client/login/index.html"));
});

app.get("/login.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Client/login/index.js"));
});

app.get("/login.css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Client/login/input.css"));
});

http.listen(5500, () => {
    console.log("listening on port 5500");
})