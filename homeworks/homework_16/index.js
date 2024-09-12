/*
Задание
* Предположим вы получили объект с данными (создайте переменную, в которой будет храниться объект)
- spaceship, в котором находятся характеристики космического корабля, такие как:
name
manufacturer
crew
maxSpeed
* Необходимо отобразить их на странице.
* Стилизация на ваше усмотрение
Дополнительная задача: Создайте кнопку "Hide Manufacturer", которая будет скрывать manufacturer корабля на странице
*/
let infoShipArray = [];

let resultShipArray = [];

let hideButtonManufacturer = document.querySelector("button");

let infoOne = document.querySelector(".infoOne");
infoShipArray.push(infoOne);
let infoTwo = document.querySelector(".infoTwo");
infoShipArray.push(infoTwo);
let infoThree = document.querySelector(".infoThree");
infoShipArray.push(infoThree);
let infoVour = document.querySelector(".infoVour");
infoShipArray.push(infoVour);

let resultName = document.querySelector("#name");
resultShipArray.push(resultName);
let resultManufacturer = document.querySelector("#manufacturer");
resultShipArray.push(resultManufacturer);
let resultCrew = document.querySelector("#crew");
resultShipArray.push(resultCrew);
let resultMaxSpeed = document.querySelector("#maxSpeed");
resultShipArray.push(resultMaxSpeed);

let hideButtonManufacturerFunction = () => {
  resultManufacturer.classList.add("visible");
};

let spaceship = {
  name: "orion",
  manufacturer: "Lockheed Martin",
  crew: true,
  maxSpeed: "15000 km/s",
};

let keysShip = Object.keys(spaceship);
for (let i = 0; i < keysShip.length; i++) {
  if (infoShipArray[i]) {
    infoShipArray[i].textContent = keysShip[i];
  }
}

let valueShip = Object.values(spaceship);
for (let i = 0; i < resultShipArray.length; i++) {
  if (resultShipArray[i]) {
    resultShipArray[i].textContent = valueShip[i];
  }
}

hideButtonManufacturer.addEventListener(
  "click",
  hideButtonManufacturerFunction
);
