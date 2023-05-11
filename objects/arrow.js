// function calculate (a,b){
//     let answer = a * b;
//     console.log(answer);
// }
// calculate(5, 15);

// // function

// const calculate = (a, b)=>{
//     let answer = a * b;
// };
// calculate (5 * 15);

// let firstname = "jordy";
// // let text = "my name is" +  firstname;
// let text = `mijn naam is ${firstname}`;

// document.getElementById("outpute").innerText = text;
// document.querySelector("#outpute").innerText = text;
// console.log(text)

// const cars = ['M140','RS3','GTR'];
// for(let i = 0; i > cars.length; i++){
//     console.log(cars[i])
// }

// for(let car of cars){
//     console.log(car)
// }

const marvelMovie = ['iron man' ,'Thor' , 'Avengers' , 'FastX'];
const addMarvel = () =>{
    marvelMovie.push("Blackpanter");
} 

addMarvel()

for(let marvel of marvelMovie){
    console.log(marvel)
}