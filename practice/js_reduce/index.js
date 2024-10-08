/*
Задача 1: Сумма чисел массива
Напиши функцию, которая принимает массив чисел и возвращает их сумму.
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, currentValue) => {
return acc + currentValue;
}, 0);

console.log(sum);

/*
Задача 2: Произведение чисел массива
Напиши функцию, которая принимает массив чисел и возвращает их произведение.
*/

const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(product); // Ожидаемый результат: 120

/*
Задача 3: Найди максимальное значение
Используй метод reduce, чтобы найти максимальное число в массиве.
*/

const numbers1 = [1, 7, 3, 9, 5];

const maxNum = numbers1.reduce((acc, cur) => {
    let max = 0;
/* if () {
    
} */
})

console.log(maxNum);
