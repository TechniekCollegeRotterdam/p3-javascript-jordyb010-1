let budget = 100;
let product = prompt();
let getId =  document.getElementById("bud");

if (budget > product){
    getId.innerText = "u heeft genoeg geld"
    // console.log ("u heeft genoeg geld");
    bud.style.color = "green";
} else {
    getId.innerText = "u heeft te weinig geld"
    bud.style.color = "red";
    // console.log ("u heeft te weinig geld")
}
