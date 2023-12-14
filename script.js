const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById ('seconds');


const newYear = '1 Jan 2024';

function CountDown(){

  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = FormatTime(hours);
  minsElement.innerHTML = FormatTime(mins);
  secondsElement.innerHTML = FormatTime(seconds);
  
}
function FormatTime(time){
  return time < 10 ? `0${time}` : time ;
}

CountDown();

setInterval(CountDown, 1000)