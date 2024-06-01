const players = document.querySelector("ul#players");

players.insertAdjacentHTML(
  "beforeend",
  "<li>Yoko</li><li>David</li><li>Andrew</li>"
);

const john = players.querySelector(".leader");

const countries = document.querySelectorAll("ol#fifa-wins > li");

// France (2 wins)
const winners = document.querySelector("ol#fifa-wins");

winners.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");

winners.style.backgroundColor = "yellow";

winners.classList.toggle("red");

const emailField = document.querySelector("#email");

console.log(emailField.value);

const home = document.querySelector("#home");

console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>Rocks!!!</strong>";
