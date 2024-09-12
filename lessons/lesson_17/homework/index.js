//Предположительные данные с сервера (тестовые данные)

const spaceship = {
  name: "Star",
  manufacturer: "SpaceX",
  crew: 50,
  maxSpeed: "10km/s",
};

//Выбрать элементы на страницы
let spaceshipName = document.querySelector("#spaceship-name");
let spaceshipManufacturer = document.querySelector("#spaceship-manufacturer");
let spaceshipCrew = document.querySelector("#spaceship-crew");
let spaceshipMaxSpeed = document.querySelector("#spaceship-max-speed");
let hideManufacturerButton = document.querySelector(
  "#hide-manufacturer-button"
);

//Заполняем элементы на странице данными
spaceshipName.textContent = `Name: ${spaceship.name}`;
spaceshipManufacturer.textContent = `Manufacturer: ${spaceship.manufacturer}`;
spaceshipCrew.textContent = `Crew: ${spaceship.crew}`;
spaceshipMaxSpeed.textContent = `Max Speed: ${spaceship.maxSpeed}`;

//Создаем функцию для скрытия элемента Manufacturer

const hideManufacturer = () => {
  spaceshipManufacturer.classList.add("hidden");
};

//Привязка функции к кнопке
hideManufacturerButton.addEventListener("click", hideManufacturer);
