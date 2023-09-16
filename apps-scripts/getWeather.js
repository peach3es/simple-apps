
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
  const apiKey = process.env.API_KEY;

  location.innerHTML = "Locating...";

  if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(
      function success(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
  
        let apiURL1 = `${api}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        let apiURL2 = `${api2}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
        fetch(apiURL1)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
  
            temp.innerHTML = `${data.main.temp.toFixed(0)}°C`;
            // location.innerHTML = `${data.name} (${latitude}° ${longitude}°)`;
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
      }); 
  } else{
    location.innerHTML = "Unable to retrieve your location";
    console.error("Location was unable to be retrieved");
  }

  
}

getWeather();
