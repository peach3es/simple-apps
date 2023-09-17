function getWeather(latitude, longitude) {
  let temp = document.getElementById("temp");
  let desc = document.getElementById("description");
  let location = document.getElementById("location");
  let rf = document.getElementById("real-feel");
  let wind = document.getElementById("wind");
  let humidity = document.getElementById("humidity");
  let pressure = document.getElementById("pressure");

  location.innerHTML = "Locating...";

  const apiURL1 = `/.netlify/functions/weather-token?lat=${latitude}&lon=${longitude}`;

  fetch(apiURL1)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      temp.innerHTML = `${data.main.temp.toFixed(0)}°C`;
      location.innerHTML = `${data.name}`;
      desc.innerHTML = data.weather[0].description;

      rf.innerHTML = `${data.main.feels_like.toFixed(1)}°C`;
      humidity.innerHTML = `${data.main.humidity.toFixed(0)}%`;
      pressure.innerHTML = `${data.main.pressure.toFixed(1)} hPa`;
      wind.innerHTML = `${data.wind.speed.toFixed(2)} km/h`;
    });

  fetch(apiURL2)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

if ("geolocation" in navigator) {
  // let api = "https://api.openweathermap.org/data/2.5/weather";
  // let api2 = "https://api.openweathermap.org/data/2.5/forecast";
  // const apiKey = process.env.API_KEY;

  navigator.geolocation.getCurrentPosition(function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  });
} else {
  location.innerHTML = "Unable to retrieve your location";
  console.error("Location was unable to be retrieved");
}
