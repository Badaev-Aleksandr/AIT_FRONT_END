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
const resultWeather = document.querySelector(".result-weather");
const weatherForm = document.querySelector("#weather-form");
const userAppId = "2669988ce3f2970e0d287742951e368a";
const spinner = document.querySelector(".spinner");

const showSpinner = () => {
  spinner.style.display = "block";
};

const hideSpinner = () => {
  spinner.style.display = "none";
};

const getWeather = async () => {
  try {
    resultWeather.classList.remove("result")
    resultWeather.classList.remove("error");
    resultWeather.innerHTML = ``;
    showSpinner();
    const getCity = getCityInput.value.trim();

    if (getCity.length !== 0) {
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${userAppId}`;

      const response = await fetch(weatherUrl);
      const weather = await response.json();
      console.log(weather);

      if (response.ok) {
        resultWeather.classList.remove("error");
        let temp = weather.main.temp;
        temp = (temp - 273.15).toFixed(0);

        const icon = weather.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

        resultWeather.innerHTML = `${getCity}: ${temp}°C <img src ="${iconUrl}">`;
        resultWeather.classList.add("result");
      } else {
        throw Object.assign(new Error("Some Error"), {
          responseError: weather,
        });
      }
    } else {
      resultWeather.classList.remove("result");
      resultWeather.classList.remove("error");
      alert("Please enter City!");
    }
  } catch (error) {
    resultWeather.classList.add("error");
    resultWeather.innerHTML = `Error status: ${error.responseError.cod}<br>Error message: ${error.responseError.message}`;
  } finally {
    hideSpinner();
    weatherForm.reset();
  }
};

//Добавили нажатие Enter для поля Input
getCityInput.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    getWeatherButton.click();
  }
})

getWeatherButton.addEventListener("click", getWeather);
