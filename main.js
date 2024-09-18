const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const formatNum = (num) =>{
  if(num<10)
  {
    return `0${num}`
  }
  else
  {
    return num
  }
}

let alertShown = false;
setInterval(()=>{
  let date = new Date();
  let nurs = new Date(2024, 8, 22);
  let interval;

    days.textContent = formatNum(Math.floor((nurs.getTime() - date.getTime() ) /1000/ 60 /60 / 24));
    hours.textContent = Math.floor(((nurs.getTime() - date.getTime() ) /1000/ 60 /60) % 24);
    minutes.textContent = Math.floor(((nurs.getTime() - date.getTime() ) /1000/ 60) % 60);
    seconds.textContent = Math.floor(((nurs.getTime() - date.getTime() ) /1000) % 60);

    const timeLeft = nurs - date;
 if (timeLeft <= 0)
 {
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      clearInterval(interval);
      if (!alertShown) {
        alert('Congrats!');
        alertShown = true;
    }
  }
  
}, 1000);


