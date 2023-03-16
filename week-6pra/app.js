let inputField = document.getElementById("inputField");
let button = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer")

button.addEventListener("click", function (){
    //aan maken van de p element dit zit op geslagen in variable pargagraaf 
let paragraaf = document.createElement("p")
//checken of die het doet in console log
// console.log(inputField.value) 
paragraaf.innerHTML = inputField.value;
//voegt een p element toe 
container.appendChild(paragraaf);
// inputeField dit betekent "" lege string 
inputField.value = "";

paragraaf.addEventListener("click", function(){
    paragraaf.style.textDecoration = "line-through";
 })

 paragraaf.addEventListener("dblclick", function(){
    container.removeChild(paragraaf);
 })
})