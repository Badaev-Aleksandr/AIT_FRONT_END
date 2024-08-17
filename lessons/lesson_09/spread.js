

const fruits = ["apple","orange","mango"];
const fruits2 = fruits;
console.log(fruits2);

const cars = ["Mercedes","Lada","Tesla","Opel"];
//spread эта функция копирует массив через три точки (...)

const carsCopy = [...cars];
carsCopy[4] = "Porsche";
console.log(cars);
console.log(carsCopy);

const ciies1 = ["Köln","New York"];
const ciies2 = ["London","Paris"];
const joinedCyties = [...ciies1, ...ciies2];
console.log(joinedCyties);

const vegitables = ["cucumber",'tomato'];
const newVegitables = [...vegitables, "carrot"];
console.log(newVegitables);




