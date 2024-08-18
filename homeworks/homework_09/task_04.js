/*Объявить массив из 10 элементов и заполнить его случайными числами 
от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль.*/

let massiv = [];
let count = 0;

while(count < 10){
    let randomNumber = Math.ceil(Math.random() * 50);
    massiv.push(randomNumber);
    count++;
}
console.log("Случайные числа от 1 до 50: " + "[" + massiv.join(", ") + "]");
console.log("Проверка количества элементов в массиве. Должно быть 10. получилось: " + massiv.length);

let min = Math.min(...massiv);
let max = Math.max(...massiv);

console.log("Min: " + min);
console.log("Max: " + max);

let totalSum = massiv.reduce((a, b) => a + b, 0);
console.log("Сумма всех элементов массива: " + totalSum);