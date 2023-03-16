let btn = document.getElementById("btn");
let block = document.getElementById("block");

btn.addEventListener("click", function(){
    block.classList.add("highlight");
})
block.addEventListener("mouseover", function(){
    block.classList.add("highlight");
})
block.addEventListener("mouseout", function(){
    block.classList.remove("highlight");
})