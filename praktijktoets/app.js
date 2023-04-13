// that everything works that if you click on the button that you can show it on the other section
let panelInpute = document.querySelector ('.overlay-panel');
document.getElementById("signUp").addEventListener("click", function(event) {
addData()    // Code om gegevens van aanmeldsectie naar registratiesectie te verplaatsen
removeChild()
});
 

// in this functie you get de data 
function addData(){
    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let name = fullName.value;
    let phone = phoneNumber.value;

    const nameTitle = document.createElement('h1');
    nameTitle.innerText = 'welkom' + name;

    const emailPara = document.createElement('p');
    emailPara.innerText = 'u heeft een bevestiging ontvangen op: ' + email;

    const phonePara = document.createElement('p');
    phonePara.innerText = 'ter verificatie sturen wij een bericht naar: ' + phone;

    panelInpute.appendChild(nameTitle);
    panelInpute.appendChild(emailPara);
    panelInpute.appendChild(phonePara);
}
//remove title and paragraph
function removeChild(){
    let para = document.querySelector(".title");
    para.remove();
    let para1 = document.querySelector(".paragraph");
    para.remove();
}