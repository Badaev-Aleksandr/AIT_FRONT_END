// Задание
// Задача 1
// Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива
let arrays = ["one", "two", "three", "four", "five"];
console.log(arrays.length);
console.log(arrays[0]);
console.log(arrays[arrays.length - 1]);
// Задача 2
// Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива
// первый вариант
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers1 = [];
for (let number of numbers) {
  if (number % 2 === 0) {
    newNumbers1.push(number);
  }
}
console.log(newNumbers1);
//второй вариант
let newNumbers2 = numbers.filter((number) => number % 2 === 0);
console.log(newNumbers2);

// Задача 3*
// Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль.
// ! Не используя математические методы max и min, только циклы

let newNumbers = [3, 7, 2, 9, 4];

let max = newNumbers[0];
let min = newNumbers[0];

for (let i = 0; i < newNumbers.length; i++) {
  if (max < newNumbers[i]) {
    max = newNumbers[i];
  }
  if (min > newNumbers[i]) {
    min = newNumbers[i];
  }
}
console.log(max);
console.log(min);
