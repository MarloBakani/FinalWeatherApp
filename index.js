function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current_temp");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "b67e5dt745od3c8832158fb7a4336902";
  let apiURL =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios.get(apiURL).then(refreshWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", searchSubmit);
