const container = document.getElementById("container");
const button = document.querySelector("button");

socket.on("add text", (i) => {
  switch (i) {
    case "backspace":
      container.removeChild(container.lastElementChild);
      break;

    case "copy":
      cop(true);
      break;

    default:
      const span = document.createElement("span");

      span.innerText = i;
      container.appendChild(span);
  }
});

button.addEventListener("click", cop);

function cop(remove_content = false) {
  let text = container.innerText;
  button.classList.add("copy");
  navigator.clipboard.writeText(text);
  setTimeout(() => button.classList.remove("copy"), 2000);
  if (remove_content) container.innerHTML = "";
}
