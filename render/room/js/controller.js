const keys_container = document.getElementById("keys_container");

addBtn("backspace", document.getElementById("backspace_container"));

for (let i = 0; i < 10; i++) {
  addBtn(i);
}
addBtn(".");

function addBtn(id, container = keys_container) {
  const audio = new Audio();

  audio.setAttribute("src", "/media/click.mp3");
  const btn = document.createElement("button");

  btn.innerText = id;
  btn.setAttribute("data-input", id);
  btn.setAttribute("class", "key");

  btn.style.order = 1 - id;

  btn.addEventListener("click", (_) => {
    socket.emit("add text", id);
    audio.play();
  });

  container.appendChild(btn);
}
