const img_container = document.getElementById("img_container");
const qr = document.createElement("img");

img_container.appendChild(qr);
const room = Math.floor(Date.now() * Math.random()).toString();

socket.emit("join room", room);
axios
  .post("/get_room", { room })
  .then(({ data }) => {
    const { url, room } = data;
    qr.src = url;
    socket.emit("join room", room);
  })
  .catch((err) => console.log(err));
