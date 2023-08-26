socket.on("add text", (i) => {
  const span = document.createElement("span");
  span.innerText = i;
  document.body.appendChild(span);
});
