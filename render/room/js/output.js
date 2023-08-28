const container = document.getElementById("container");
const button = document.querySelector("button");

socket.on("add text", (i) => {
  switch (i) {
    case "backspace":
      container.removeChild(document.body.lastElementChild);
      break;
    default:
      const span = document.createElement("span");

      span.innerText = i;
      container.appendChild(span);
  }
});

document.body.addEventListener("copy", (e) => console.log(e));

button.addEventListener("click", (e) => {
  let text = container.innerText;
  button.classList.add("copy");
  navigator.clipboard.writeText(text);
  setTimeout(() => button.classList.remove("copy"), 1000);
});
