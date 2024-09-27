//Задача 1. Задан массив чисел. Вернуть массив только с нечетными числами - [3, 5, 8, 10, 13, 121, 5, 12, 14]

let array = [3, 5, 8, 10, 13, 121, 5, 12, 14];

let negativeArray = array.filter((num) => num % 2 !== 0);

console.log(negativeArray);

//Задача 2. Вернуть массив, в который будут входить слова с длиной строго больше 5 символов и кроме слова "orange". 
//["apple", "banana", "orange", "grape", "kiwi"]

const fruchtArray = ["apple", "banana", "orange", "grape", "kiwi"];



