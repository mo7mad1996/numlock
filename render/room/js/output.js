const audio = document.createElement("audio");

audio.src("/media/click.mp3");

socket.on("add text", (i) => {
  audio.play();
  switch (i) {
    case "backspace":
      document.body.removeChild(document.body.lastElementChild);
      break;
    default:
      const span = document.createElement("span");

      span.innerText = i;
      document.body.appendChild(span);
  }
});
