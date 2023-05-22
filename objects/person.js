let output = document.querySelector(".output");
let person = {
  name: "Jordy Bakker",
  age: 22,
  DateOfBirt: "05-02-2001",
  gender: "male",
  personIsAlive: true,
  hobby: ["darts", "cars", "gym", "tunning"],
  changeName: function (name) {
    return(this.name = name)

  },
  changeAlive: function () {
    return(this.personIsAlive = false)
  },
  addHobby: function () {
    this.hobby.push(newHobby);
  },
};
console.log(person.changeName("Bart"));

output.innerHTML = `
<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.DateOfBirt}</p>
<p>${person.gender}</p>
<p>${person.gender}</p>
<p>${person.personIsAlive}</p>
<p>${person.hobby}</p>
`;
