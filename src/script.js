function search(event) {
  event.preventDefault();
  //let apiKey = "361e0aa61c613a70c483b8ca214c4ec2";
  let city = document.querySelector("#text-input").value;
  //let cityInput = document.querySelector("#text-input");
  //let cityElement = document.querySelector("#city");
  //cityElement.innerHTML = cityInput.value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=361e0aa61c613a70c483b8ca214c4ec2&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function formatDate(date) {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = currentTime.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", formatDate);
