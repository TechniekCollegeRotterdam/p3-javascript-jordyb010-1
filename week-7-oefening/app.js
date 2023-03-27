// let names = ["jordy","pim","karen","kees", "joery" ] 
// names[0]
// console.log(names [0]);
// // console.log(names.length);
// names.push("menno")
// console.log(names)
let output = document.getElementById("text");
//opdracht 1.2
let winkelmand = ["banaan", "wisky","chips","boon","aardapppel"]
console.log(winkelmand.length)
output.innerText = "er zitten" + winkelmand.length + "producten in mijn winkelmand";
output.innerText = "uw produchten" + winkelmand;
//opdracht 3
output.innerText = "staat op de 4de plek" + winkelmand [3];
//opdracht 4
winkelmand [1] = "bier";
//opdracht 5
function product_toevoegen(){
    winkelmand.push("fanta")
    output.innerText = winkelmand;
}
//opdracht 6
if (winkelmand.length >= 1){
    output.innerText = `Er zitten ${winkelmand.length} producten in uw winkelmand. \nUw producten zijn: ${winkelmand.join(", ")}.`; 
}else{
    output.innerText = "U heeft niet genoeg producten om te tonen.";
}
//opdracht 7
if (winkelmand[4]==="drop"){
    output.innerText = ` er zitten ${winkelmand.length} producten in uw winkelmand. \nUw prodcuten zijn: ${winkelmand.joine(",")}.`;
}else{
    output.innerText = "u heeft geen drop";
}
//opdracht 8
output.innerText = winkelmand,join(" ");
//opdracht 9
winkelmand.splice(0, 2)
output.innerText = winkelmand
//opdracht10
winkelmand.sort();
output.innerText = winkelmand