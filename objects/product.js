let output = document.querySelector(".output");
let product = {
    name:"Nissan",
    model:"GTR",
    horsepower:"600",
    img: "./img/IMG_9328-scaled-1.jpg"
};
output.innerHTML = `
<img src="${product.img}"></img>
`