const liveTimeParent = document.getElementById('header');
console.log(liveTimeParent)
const liveTime = document.createElement('time');
liveTimeParent.appendChild(liveTime);

export default function myLiveTime() {



let currentTime = new Date();
let year = currentTime.getFullYear();
let month = currentTime.getMonth();
let date = currentTime.getDate();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// formating time: HH:MM:SS
// padStart let me full the empty string with the caracter or number i want

let fomartedTime = date.toString().padStart(2, '0') + '/' + month.toString().padStart(2, '0') + '/' + year.toString() + '/' + hours.toString().padStart(2,'0') + ':' + minutes.toString().padStart(2,'0') + ':' + seconds.toString().padStart(2,'0')


liveTime.innerHTML = fomartedTime;


}

setInterval(myLiveTime, 1000);


