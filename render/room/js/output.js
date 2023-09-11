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

  // navigator.clipboard
  //   .readText()
  //   .then((clipText) => (container.innerText = clipText));

  navigator.clipboard.writeText(text).then(
    (_) => button.classList.add("copy"),
    (res) => console.log(res, "err")
  );
  setTimeout(() => button.classList.remove("copy"), 2000);
  if (remove_content) container.innerHTML = "";
}
