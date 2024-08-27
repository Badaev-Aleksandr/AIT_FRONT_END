/*Задача 1
У вас есть массив чисел [2, 4, 6, 8, 10]. 
Напишите функцию для удвоения каждого значения в массиве 
(массив нужно передать аргументом) и вывода результата в консоль. 
Вызовите функцию для демонстрации результата*/

//----------------- Идея 1 ---------------------
let numbers1 = [2, 4, 6, 8, 10];
function doublingNumber1(numbers) {
  let [x, y, z, a, b] = numbers;
  x *= 2;
  y *= 2;
  z *= 2;
  a *= 2;
  b *= 2;
  let newNumbers = [x, y, z, a, b];
  console.log(newNumbers);
}
doublingNumber1(numbers1);
//----------------- Идея 2 ---------------------
let numbers2 = [2, 4, 6, 8, 10];
function doublingNumber2(numbers) {
    for( let i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i] * 2;
    }
  console.log(numbers);
}
doublingNumber2(numbers2);

/* Задача 2
Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. 
Для отображения результа работы функции, вызовите её три раза с различными параметрами, 
результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль*/
function getChars(line,number){
 let str = line.slice(0,number);
 return str;
}
let exempleOne = getChars("привет как тебя зовут?", 10);
let exempleTwo = getChars("привет как тебя зовут?", 7);
let exempleThree = getChars("привет как тебя зовут?", 15);
console.log(exempleOne);
console.log(exempleTwo);
console.log(exempleThree);

/*Задача 3*
У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения элементов массива 
(массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию для демонстрации результата*/
let numbers3 = [10, 15, 20, 25, 30];
function getAverage(numbers){
let sumNumbers = 0;
for( let number of numbers){
    sumNumbers += number;
}
let average = sumNumbers/numbers.length;
console.log(average);
}
getAverage(numbers3);

