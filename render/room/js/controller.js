const keys_container = document.getElementById("keys_container");

for (let i = 0; i < 10; i++) {
  const btn = document.createElement("button");

  btn.innerText = i;
  btn.setAttribute("data-input", i);
  btn.setAttribute("class", "key");

  btn.style.order = 10 - i;

  btn.addEventListener("click", (_) => {
    socket.emit("add text", i);
  });

  keys_container.appendChild(btn);
}
