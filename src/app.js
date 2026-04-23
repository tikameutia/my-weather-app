function replaceCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityInput = document.querySelector("#city-search-input");
  city.innerHTML = cityInput.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", replaceCity);
