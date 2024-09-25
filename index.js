function refreshWeather(response) {
  let city = document.querySelector("h1");
  city.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#current_temp");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = `${Math.round(temperature)}°C`;

  let theday = document.querySelector("#the_day");
  let currentDate = new Date();
  theday.innerHTML = formatDate(currentDate);

  let typeweather = document.querySelector("#type_weather");
  let typeweathercall = response.data.condition.description;
  typeweather.innerHTML = typeweathercall;

  let humidityhtml = document.querySelector("#humidity");
  let humiditycall = response.data.temperature.humidity;
  humidityhtml.innerHTML = `${humiditycall}%`;

  let wind = document.querySelector("#wind");
  let windcall = response.data.wind.speed;
  wind.innerHTML = `${windcall} km/h`;

  let weatheremoji = document.querySelector("#weather_emoji");
  let weatherE = response.data.condition.icon_url;
  weatheremoji.setAttribute("src", weatherE);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
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

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "b67e5dt745od3c8832158fb7a4336902";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(refreshWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", searchSubmit);
