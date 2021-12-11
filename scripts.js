const weatherApiKey = 'a00a103dd7b8c8549fae478379b86fc4'
const $city = $('#city')

let mainWeather
let weatherDesc
let weatherIcon
let currentTemp
let minTemp
let maxTemp
let feelsLike
let humidity

async function fetchWeather(event) {
  event.preventDefault()
  const cityInput = $city.val()
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${weatherApiKey}&units=imperial`)
  // TO DO: catch errors 
  const weatherData = await response.json()
  mainWeather = weatherData.weather[0].main
  weatherDesc = weatherData.weather[0].description
  weatherIcon = weatherData.weather[0].icon
  currentTemp = parseInt(weatherData.main.temp)
  minTemp = parseInt(weatherData.main.temp_min)
  maxTemp = parseInt(weatherData.main.temp_max)
  feelsLike = parseInt(weatherData.main.feels_like)
  humidity = weatherData.main.humidity

  displayWeather(cityInput)
}

function displayWeather(city) {
  const weatherList = document.getElementById('weather')
  weatherList.innerHTML =  `
    <p> Current Weather for ${city}:</p>
      <ul id="weather-list">
        <li id="icon"> Icon </li>
        <li id="weather-desc"> ${mainWeather} - ${weatherDesc} </li>
        <li id="current-temp"> The current temperature is ${currentTemp} and feels like ${feelsLike} </li>
        <li id="mix-max-temp"> There is a low of ${minTemp} and a high of ${maxTemp} </li>
        <li id="humidity"> Humidity: ${humidity}% </li>
      </ul>
  `
}
