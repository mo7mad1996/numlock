const scaner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
scaner.render((url) => {
  socket.emit("go to output", url, (_) => {
    window.location.replace(`/room/controller/${url}`);
  });
  scaner.clear();
});
