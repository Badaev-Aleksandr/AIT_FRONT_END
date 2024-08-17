let text = "Hello, JS!";

// Длина строки
let length = text.length; //13
console.log("Длина строки: " + length);
// Преобразование в нижний/верхий регистр 
let upperCase = text.toUpperCase(); 
console.log("Выводим строку в верхний регистр: " + upperCase);
let lowerCase = text.toLowerCase();
console.log("Выводим строку в нижний регистр: " + lowerCase);

// Получение подстроки
let substring = text.substring(0,5); // выводит от 0 до 5 го индекса 

//Поиск подстроки 
let indexOfWorld = text.indexOf("JS");
console.log(indexOfWorld);



