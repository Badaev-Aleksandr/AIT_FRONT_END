//получить массив ключей/значений объекта

const color = {
  name: "white",
  code: "fff",
  prices: {
    price: 100,
    sale: true,
  },
};

const colorKeysArray = Object.keys(color); //получаем ключи
console.log(colorKeysArray);

const colorValuesArray = Object.values(color); //получаем значение
console.log(colorValuesArray);

const colorKey = Object.keys(color.prices);
console.log(colorKey);

//------------------------ Пример копирования с примитивными типами данных ---------------------------
const userName = "Tom";
console.log(userName);

let adminName = userName;
console.log(adminName);

adminName = "Bob";
console.log(userName, adminName);

//Ссылочный тип данных (в переменной будет храниться только ссылка на объект, массив или функцию)
const customerDate = {
  customerName: "Marry",
  company: "Apple",
};

customerDate.company = "Facebook";
console.log(customerDate);

//Так делать нельзя
const userDate = customerDate;
console.log(userDate);

userDate.customerName = "John";
console.log(userDate);
console.log(customerDate);

//деструктуризация
const bookObj = {
  bookName: "Great Gatsby",
  price: 20,
  author: "Fitzgerald",
};

const newBookObj = { ...bookObj };
console.log(newBookObj);

newBookObj.price = 30;
console.log(newBookObj);
console.log(bookObj);

//Передача аргументов в функцию, с помощью деструктуризации (оператор расширения)
const numbersOperation = (a, b, c, d) => {
  return a - b + c / d;
};

const numbers = [34, -9, 23, 1];
console.log(numbersOperation(...numbers));

//деструктурирующее присваивание
const fruitObj = {
  nameFruit: "Apple",
  price: 30,
};

// let name = fruitObj.nameFruit;
// let fruitPrice = fruitObj.price;
// console.log(name, fruitPrice);

const {
  nameFruit,
  price: fruitPrice,
  shop: fruitShop = "Shop name",
} = fruitObj;
console.log(fruitShop);

// const [a,b] = arr   деструктурирующее присваивание
//

//----------------------------- Методы массивов ----------------------------
//map немутирующий метод
const words = ["red", "grape", "note", "black"];

const newWords = words.map((word, index, arr) => {
  console.log(`${index + 1} - ${word} in array ${arr}`);

  return word.length;
});

console.log(newWords);
console.log(words);

const wordsObjAr = words.map((word, i) => {
  return {
    index: i,
    position: i + 1,
    word: word,
    length: word.length,
  };
});

console.log(wordsObjAr);

//forEach (Ничего не возвращает, в остальном работает как map) немутирующий метод

const list = document.querySelector(".list");

const cars = ["BMW", "Tesla", "Asto Martin"];

cars.forEach((car) => {
  const listElement = document.createElement("li");
  listElement.textContent = car;
  list.append(listElement);
});

//forEach с возвратом
// const newArray = cars.forEach((car) => {
//   return car.length;
// });
// console.log(newArray);

//метод для фильтрации исходного массива(возращает элементы, которые удовлетворяют условия в callback) немутирующий метод

const products = [
  { productName: "Milk", price: 100 },
  { productName: "Milk", price: 110 },
  { productName: "Bread", price: 120 },
  { productName: "Grape", price: 150 },
];

// const filteredProducts = products.filter((product) => product.price > 110);
const filteredProducts = products.filter(
  (product) => product.productName === "Milk"
);
console.log(filteredProducts);

//Метод reverse (меняет массив на обратный порядок) мутирующий метод
const productsName = ["Milk", "Sugar", "Apples", "Bread"];
productsName.reverse();
console.log(productsName);

const newAs = [...productsName].reverse();
console.log(newAs);

//Метод join - превращаем массив в строку с разделителем немутирующий метод
const str = productsName.join(":");
console.log(str);
console.log(productsName);

// includes - проверяет, есть ли переданный элемент в массиве (возвращает boolean) - немутирующий метод
const isElement = productsName.includes("Bread");
console.log(isElement);
