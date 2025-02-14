// packages
const express = require("express");
const socketio = require("socket.io");
var bodyParser = require("body-parser");
const path = require("path");
var QRCode = require("qrcode");

// main constractor
const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, (_) => console.log("listen on port", port));
const IO = socketio(server);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("./"));
app.use(express.static("render"));

app.post("/get_room", (req, res) => {
  QRCode.toDataURL(  
    `https://numlock.onrender.com/room/controller/${req.body.room}`,
    {
      width: 10,
      version: 6,
      scale: 20,
      color: { light: "#f2fffd" },
    },
    function (err, url) {
      if(err)     res.status(500).json({ error: 'Failed to generate QR code', err });
      res.json({ url, room: req.body.room });
    }
  );
});

app.get("/room/:event/:id", (req, res) => {
  res.sendFile(path.join(__dirname + `/render/room/${req.params.event}.html`));
});

// io
IO.on("connection", (socket) => {
  socket.on("join room", (room) => {
    socket.join(room)
    socket.broadcast.to(room).emit("go to output", room)
  });
  socket.on("go to output", (room, cb) => {
    IO.to(room).emit("go to output", room);
    if (cb) {
      cb();
    }
  });

  socket.on("add text", (i) => socket.broadcast.emit("add text", i));
});
