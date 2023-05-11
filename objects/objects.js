let output = document.querySelector('.output')
let car = {
    //properties
    name: "fiat",
    model: "500",
    weight: "850kg",
    color: "white",
    repairs: ['turbo', 'intaketube', 'dumpvale', 'brakes',],
    //methods
    start: function(){
        return "ik ben gestart";
    },
    drive: function(){
        return "i drive";
    },
    brake: function(){
        return "i brake";
    },
    stop: function(){
        return "i stop";
    },
};
output.innerHTML = `
<p> naam van de auto is ${car.name}</p>
<p>${car.drive}</p>
`;
// output.innerHTML = `
// <p>${car.drive}</p>
// `



// console.log(car.model())
// console.log(.repairs.repairs[2])
// car.name = 'seat';
// console.log =(name)