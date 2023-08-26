const socket = io();

socket.on("go to output", (room) => {
  location.replace("/room/output/" + room);
});
