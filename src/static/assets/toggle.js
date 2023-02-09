let btn = document.getElementById("btn");
console.log(btn);

function toggle() {
  if (btn.textContent == "Show details") {
    btn.textContent = "Hide details";
    document.getElementById("extra").style.display = "flex";
  } else {
    btn.textContent = "Show details";
    document.getElementById("extra").style.display = "none";
  }
}

btn.addEventListener("click", toggle);
