/*
Задача 1: Сумма чисел массива
Напиши функцию, которая принимает массив чисел и возвращает их сумму.
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, currentValue) => {
  return acc + currentValue;
});

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

const numbers1 = [3, 65, 2, 8, 0, 8, 3, "b"];

try {
  if (numbers1.length === 0) {
    throw new Error("Массив пустой, нельзя применить reduce()");
  }
  const maxNum = numbers1.reduce((acc, curr) => {
    if (typeof acc !== "number" || typeof curr !== "number") {
      throw new Error("Массив содержит нечисловые значения!");
    }
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  });

  console.log(maxNum);
} catch (error) {
  console.log("Error: " + error.message);
}

/*
5.Подсчет длины всех строк в массиве:
Напишите функцию, которая принимает массив строк и возвращает общую длину всех строк.
*/
const strings = ["hello", "world", "javascript"];
// Ожидаемый результат: 20

const stringLength = strings.reduce((acc, word) => {
  acc += word.length;
  return acc;
}, 0);

console.log(stringLength);

/*
6.Подсчет количества четных чисел в массиве: 
Напишите функцию, которая принимает массив чисел и возвращает количество четных чисел.
*/
const numbers2 = [1, 2, 3, 4, 5, 6, 10];

const countEvenNumber = numbers2.reduce((acc, num) => {
  return num % 2 === 0 ? acc + 1 : acc;
}, 0);

console.log(countEvenNumber);

/*
Создание строки из массива: 
Напишите функцию, которая принимает массив строк и объединяет их в одну строку, разделенную пробелами.
*/

const words = ["Hello", "world", "from", "reduce"];
// Ожидаемый результат: 'Hello world from reduce'

const stringLine = words.reduce((acc, word) => {
  const emptyChar = " ";

  acc = acc + emptyChar + word;
  return acc.trim();
}, "");

console.log(stringLine);

//Умеренно сложные задачи на reduce

/*
1.Наибольший элемент в массиве: 
Напишите функцию, которая находит наибольший элемент в массиве чисел, используя reduce.
*/
const numbers3 = [3, 5, 7, 2, 8];
// Ожидаемый результат: 8

const maxNumber = numbers3.reduce((acc, num) => {
  if (acc > num) {
    return acc;
  } else {
    return num;
  }
});

console.log(maxNumber);

/*
2.Подсчет вхождений элементов: 
Напишите функцию, которая подсчитывает количество вхождений каждого элемента в массиве и возвращает объект.
*/

const fruitsArr = ["apple", "banana", "apple", "orange", "banana", "banana"];
// Ожидаемый результат: { apple: 2, banana: 3, orange: 1 }

const fruitsObj = fruitsArr.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitsObj);

/*
3.Объединение объектов: Напишите функцию, которая принимает массив объектов и объединяет их в один объект. 
Если ключи повторяются, значения должны быть объединены в массив.
*/
const data = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "a", value: 3 },
];
// Ожидаемый результат: { a: [1, 3], b: [2] }

/*
4.Фильтрация и подсчет: 
Напишите функцию, которая принимает массив чисел и возвращает количество чисел, которые больше 10.
*/
const numbers4 = [5, 12, 8, 130, 44];
// Ожидаемый результат: 3

/*
5.Преобразование массива строк в объект: 
Напишите функцию, которая принимает массив строк, где каждая строка имеет формат "ключ:значение", 
и возвращает объект с этими ключами и значениями.
*/
const entries = ["name:Alice", "age:25", "city:New York"];
// Ожидаемый результат: { name: 'Alice', age: '25', city: 'New York' }
