function updateWeatherInformation(response) {
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
  let feelsLikeTemperature = document.querySelector(
    "#current-weather-feels-like",
  );
  feelsLikeTemperature.innerHTML = Math.round(
    response.data.temperature.feels_like,
  );
  let weatherDescription = document.querySelector(
    "#current-weather-description",
  );
  weatherDescription.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let icon = document.querySelector("#current-weather-icon");
  icon.innerHTML = `<img src=${response.data.condition.icon_url}>`;
  let currentDayAndTime = document.querySelector("#current-day-and-time");
  let date = new Date(response.data.time * 1000);
  currentDayAndTime.innerHTML = updateDayAndTime(date);
}

function updateDayAndTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hour}:${minute}`;
}

function searchWeather(city) {
  let apiKey = "0050t012172bb4a92f6b53332o6cb5f4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherInformation);
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search-input");
  searchWeather(cityInput.value);
}

searchWeather("Lelystad");

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
