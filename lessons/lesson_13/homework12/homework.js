/* Задание
Необходимо создать функцию с названием arrayProcessor, которая будет принимать 
два параметра, первый параметр - массив, второй параметр - функция callback */

// Требования:

/*1.Функция arrayProcessor должна выполнять 3 действия:
- первое действие - преобразовать каждый элемент, в переданном массиве, 
в строку, результат должен сохраняться в новом массиве (то есть не мутировать входной массив)
- вызывать функцию, которая была передана в параметрах 
(функция callback будет принимать в качестве параметра преобразованный на первом шаге массив)
- возвращать то, что вернула функция callback после её вызова*/

/*2.Чтобы показать пример использования функции arrayProcessor вам нужно:
- создать ещё две функции (требования к функциям см. в пункте 3)

- вызвать arrayProcessor с каждой из функций по очереди

- каждый из 2-х результатов вывести в консоль*/

/*3.Требования к функциям callback
- первая функция должна преобразовывать каждый элемент массива в 
верхний регистр и возвращать новый массив с преобразованными элементами

- вторая функция должна возвращать сумму длин всех строк*/

let arrayProcessor = (inputArray, operatorCallback) => {
  let stringArray = [];

  for (let element of inputArray) {
    stringArray.push(String(element));
  }

  return operatorCallback(stringArray);
};

let getUpperCaseArray = (initialArray) => {
  let upperCaseStringArray = [];

  for (let stringElement of initialArray) {
    let upperElement = stringElement.toUpperCase();
    upperCaseStringArray.push(upperElement);
  }

  return upperCaseStringArray;
};

let getSumArrayLength = (initialArray) => {
  let sum = 0;

  for (let stringElement of initialArray) {
    sum += stringElement.length;
  }

  return sum;
};

let exampleArray = ["Red", "Green", "Black", 23, undefined, null, " ", ['Blue']];

let upperCaseResult = arrayProcessor(exampleArray, getUpperCaseArray);
let arraySumResult = arrayProcessor(exampleArray, getSumArrayLength);
console.log(upperCaseResult);
console.log(arraySumResult);
