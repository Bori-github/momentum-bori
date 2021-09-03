const API_KEY = "9835b62c6028b51bf975e77ebb32271d";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherIcon = document.getElementById("weather__icon");
      const weatherTemp = document.getElementById("weather__temp");
      const weatherRegion = document.getElementById("weather__region");

      weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
      weatherTemp.innerText = `${Math.floor(data.main.temp)} ℃`;
      weatherRegion.innerText = data.name;
    });
}

function onGeoError() {
  console.log("Where are you, now?");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);
