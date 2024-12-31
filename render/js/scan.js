const sound = new Audio("/media/scaner.mp3");

const scaner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
scaner.render((url) => {
  sound.play();
  socket.emit("go to output", url, (_) => {
    window.location.replace(`${url}`);
  });
  scaner.clear();
});
