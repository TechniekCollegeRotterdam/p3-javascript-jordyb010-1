let output = document.querySelector(".output");
let book = {
  name: "Harry Potter",
  author: "J.K Rollwings",
  year: 2000,
  sales: 1000000,
  price: "15$",
};

output.innerHTML = `
<p>${book.name}</p>
<p>${book.price}</p>
<p>${book.author}</p>
<p>${book.year}</p>
<p>${book.sales}</p>
`;
