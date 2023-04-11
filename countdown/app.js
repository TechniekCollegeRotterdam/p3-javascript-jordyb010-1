const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");

const currentDay = new Date().getFullYear();
const meiVakantie = new Date (`April 29 $ {currentyear + 1} 00:00:00`)

function updateCountdowntime () {
    const currentDay = new Date ();
    const diff = meiVakantie - currentDay;
    console.log(diff);
}
updateCountdowntime ();