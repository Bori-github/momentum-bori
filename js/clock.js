const clock = document.querySelector(".greeting__clock");

function getcurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  greetingMessages(hours);
}

getcurrentTime();
setInterval(getcurrentTime, 1000);
