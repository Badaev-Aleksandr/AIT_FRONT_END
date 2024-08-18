/* Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. 
Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму. */
function sum(a,b){
    return a + b;
}
let massiv = [];
let count = 0;

while(count < 10){
    let randomNumber = Math.ceil(Math.random() * 100);
    if(randomNumber <= 75){
        massiv.push(randomNumber);
        count++;
    }
}
console.log("Случайные числа от 1 до 75: " + "[" + massiv.join(", ") + "]");
console.log("Проверка количества элементов в массиве. Должно быть 10. получилось: " + massiv.length);

let min = Math.min(...massiv);
let max = Math.max(...massiv);


console.log("Min: " + min);
console.log("Max: " + max);
let sumMaxAndMin = sum(min,max);
console.log("Сумма чисел min и max = " + sumMaxAndMin);