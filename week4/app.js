let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let answer = document.getElementById("answer")

function multiply(){

if (num1.value > 0 || num2.value > 0){
    answer.innerText = "het antwoord is " + num1.value * num2.value;
} else {
    answer.innerText = "het getal is te laag";
}

}
function minus(){
    if (num1.value > 0 || num2.value > 0){
        answer.innerText = "het antwoord is " + num1.value - num2.value;
    } else {
        answer.innerText = "het getal is te laag";
    }
}

function add (){
    answer.innerText = answer2 = Number(num1.value) + Number(num2.value);
    if (num1.value > 0 || num2.value > 0){
        answer.innerText = "het antwoord is " + Number(num1.value) + Number(num2.value);
    } else {
        answer.innerText = "het getal is te laag";
    }
}
function devide(){
    if (num1.value > 0 || num2.value > 0){
        answer.innerText = "het antwoord is " + num1.value / num2.value;
    } else {
        answer.innerText = "het getal is te laag";
    }
}