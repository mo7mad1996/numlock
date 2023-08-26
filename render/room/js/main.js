const room = location.pathname.split("/")[3];
const socket = io();

socket.emit("join room", room);
