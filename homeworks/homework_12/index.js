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

let testArr = [459777, "Hello", 6445555, "World"];

const arrayProcessor = (arr, callback) => {
  if ((arr || callback) === undefined) {
    console.log("Вы невыполнили входящие условия функции!");
  } else {
    let arrString = [];
    for (const element of arr) {
      arrString.push(element.toString());
    }
    let resultFuncArr = callback(arrString);
    return resultFuncArr;
  }
};

//функция callback
//первая функция
const getUpperCaseArr = (arr) => {
  let arrToUpperCase = [];
  for (const element of arr) {
    arrToUpperCase.push(element.toUpperCase());
  }
  return arrToUpperCase;
};

//функция callback
//вторая функция
const sumAllElementLength = (arr) => {
  let sum = 0;
  for (let element of arr) {
    sum += element.length;
  }
  return sum;
};
//вызов функций с выводом на экран
let test1 = arrayProcessor(testArr, getUpperCaseArr);
let test2 = arrayProcessor(testArr, sumAllElementLength);
console.log(test1);
console.log(test2);

/*2.Чтобы показать пример использования функции arrayProcessor вам нужно:
- создать ещё две функции (требования к функциям см. в пункте 3)

- вызвать arrayProcessor с каждой из функций по очереди

- каждый из 2-х результатов вывести в консоль*/

/*3.Требования к функциям callback
- первая функция должна преобразовывать каждый элемент массива в 
верхний регистр и возвращать новый массив с преобразованными элементами

- вторая функция должна возвращать сумму длин всех строк*/
