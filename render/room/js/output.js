socket.on("add text", (i) => {
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
