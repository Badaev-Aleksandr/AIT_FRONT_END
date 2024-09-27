/*
Дубликат требований:
Страница должна содержать:

- заголовок - “Weather app”
- поле для ввода города
- кнопку “Получить погоду”
- область для отображения данных о погоде или ошибки

* При нажатии на кнопку “Получить погоду”, должен отправляться запрос на 
url https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}

* Во время ожидания ответа нужно отображать индикатор

* После успешного получения данных, их нужно отобразить на странице (температуру (градусы Цельсия) и название города).

* При получении ошибки, её данные нужно отобразить на странице (код и сообщение)

* При отсутствии названия города, после нажатия на кнопку “Получить погоду” должен появиться alert 
с просьбой ввести название города

Задача со * - отобразить иконку погоды из ответа. Ссылка для получения картинки(icon - вы должны забрать из ответа):
http://openweathermap.org/img/w/${icon}.png
*/

const getWeatherButton = document.querySelector("#get-weather-button");
const getCityInput = document.querySelector("#city");
// const resultWeather = document.querySelector(".result-weather-container");
const resultTemp = document.querySelector(".result-temp");
const resultImgWeather = document.querySelector(".result-icon");
const weatherForm = document.querySelector("#weather-form");
const userAppId = "2669988ce3f2970e0d287742951e368a";

const getWeather = async () => {
  const getCity = getCityInput.value.trim();

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${userAppId}`;

  const response = await fetch(weatherUrl);
  const weather = await response.json();
  console.log(weather);
  if (response.ok) {
    let temp = weather.main.temp;
    temp = (temp - 273.15).toFixed(0);

    const icon = weather.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

    resultTemp.textContent = `${getCity}: ${temp}°C`;
    resultImgWeather.innerHTML = `
    <img src ="${iconUrl}">
    `;
  }

  weatherForm.reset();
};

getWeatherButton.addEventListener("click", getWeather);
