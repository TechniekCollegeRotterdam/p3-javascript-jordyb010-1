let person = document.querySelector(".person");
let title = document.querySelector(".title");
let clearButton = document.querySelector('.clearButton');
let out = "";
fetch("./bday.json")
  .then((response) => response.json())
  .then((persons) => {
    console.log(persons.length);
    for (let person of persons) {
      out += `
        <div class = "card">
        <div class = "info">
        <img src="${person.img}"></img>
        <div class ="tekst">
        <h1>${person.name}</h1>
        <p>${person.years}</p>
        </div>
        </div>
        </div>
        `;
    }
    title.innerHTML = persons.length + " Birthdays today";
    person.innerHTML = out;
  });

// Clear All-knop
document.querySelector(".clearButton").addEventListener("click", clearPage);
function clearPage() {
  document.querySelector(".person").innerHTML =``;
  output.innerHTML = "";
}

