const sound = new Audio("/media/scaner.mp3");

const scaner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
scaner.render((url) => {
const room = url.split("/")[url.split("/").length - 1];

  sound.play();
  socket.emit("go to output", room, (_) => {
    location.replace(`${url}`);
  });
  scaner.clear();
});
