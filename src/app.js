function updateWeatherInformation(response) {
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(response.data.temperature.current);
}

function searchWeather(city) {
  let apiKey = "0050t012172bb4a92f6b53332o6cb5f4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherInformation);
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search-input");
  searchCity(cityInput.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

searchWeather("Lelystad");
