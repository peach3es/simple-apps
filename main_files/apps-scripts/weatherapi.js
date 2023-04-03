import API_KEY from "../sensitive/apikey.js";

function getWeather() {
  let temp = document.getElementById("temp");
  let desc = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = API_KEY;

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let apiURL = `${api}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let temperature = data.main.temp;
        temp.innerHTML = `${temperature}°C`;
        location.innerHTML = `${data.name} (${latitude}° ${longitude}°)`;
        desc.innerHTML = data.weather[0].description;
      });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
}

getWeather();
