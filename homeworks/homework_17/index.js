/*
Задание
Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив). 
Значения массива [100, 400, 900, 300, 500].
Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
Стилизация на ваше усмотрение
Дополнительная задача: Создайте кнопку "Filter", при нажатии на которую 
на странице будут отображаться только блоки с ценами > 450
*/

const pricesArray = [100, 400, 900, 300, 500];

const priceContainer = document.querySelector(".price-container");

const filterButton = document.querySelector("#filter-button");

const displayPrices = (arrPrices) => {
  priceContainer.innerHTML = "";
  arrPrices.forEach((price) => {
    const divPriceBlock = document.createElement("div");
    divPriceBlock.textContent = price;
    priceContainer.append(divPriceBlock);
  });
};

const filterPrices = (arrPrices) => {
  const filteredPrices = arrPrices.filter((price) => price > 450);
  displayPrices(filteredPrices);
};

const finishContainerBorder = () => {
  priceContainer.classList.add("finish-result");
};

displayPrices(pricesArray);

filterButton.addEventListener("click", () => {
  filterPrices(pricesArray);
  finishContainerBorder();
});
