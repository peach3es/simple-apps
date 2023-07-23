import API_KEY from "../sensitive/apikey.js";

function getWeather() {
  let temp = document.getElementById("temp");
  let desc = document.getElementById("description");
  let location = document.getElementById("location");
  let rf = document.getElementById("real-feel");
  let wind = document.getElementById("wind");
  let humidity = document.getElementById("humidity");
  let pressure = document.getElementById("pressure");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let api2 = "https://api.openweathermap.org/data/2.5/forecast";
  let apiKey = API_KEY;

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let apiURL1 = `${api}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    let apiURL2 = `${api2}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiURL1)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let temperature = data.main.temp;
        temp.innerHTML = `${temperature.toFixed(0)}°C`;
        // location.innerHTML = `${data.name} (${latitude}° ${longitude}°)`;
        location.innerHTML = `${data.name}`;
        desc.innerHTML = data.weather[0].description;
        let real_feel = data.main.feels_like;
        rf.innerHTML = `${real_feel.toFixed(0)}°C`;
        humidity.innerHTML = data.main.humidity;
        pressure.innerHTML = data.main.pressure;
        wind.innerHTML = data.wind.speed;
      });

    fetch(apiURL2)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

getWeather();
