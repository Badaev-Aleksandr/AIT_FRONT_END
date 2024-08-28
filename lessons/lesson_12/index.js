// ------------------------------- Function hoisting --------------------------------

// 1-й пример - вызов функции add(Function declaration)
console.log(add(20, 30));

// 2-й пример - вызов функции divide(Function expression)

// console.log(divide(10 ,5)); // ReferenceError: Cannot access 'divide' before initialization

//Создаем функцию Function declaration
function add(a, b) {
  return a + b;
}

//Создаем функцию Function expression
const divide = function (x, y) {
  return x / y;
};

// divide = 5;

let result = divide(2, 4);
console.log(result);

//-------------------------------------Стрелочные функции ----------------------------------------

// let getNewNumber = num => num + 10;
// let getNewNumber = (num) => {
//   return num + 10;
// };
let getNewNumber = (num, num2 = 20) => {
  return num + num2;
};

console.log(getNewNumber(10));

// ------------ функция в качестве аргумента -----------

let performOperation = (num1, num2, operation) => {
  let result = operation(num1, num2);
  return result;
};

let divideFunc = (a, b) => a / b;
console.log(performOperation(2, 1, divideFunc));

console.log(performOperation(4, 5, (x, y) => x * y));

// -------------------------------------Область видимости -------------------------------

let age = 23;
var messageAccess = "Ok";

if (age > 18) {
  var messageAccess = "Access";
  console.log(messageAccess);
  console.log(age);
} else {
  var messageFailur = "Failure";
  console.log(messageFailur);
}

console.log(messageAccess);

//пример создания переменных внутри функции
var message = "Hi";
const showMessage =()=>{
    var message = "Hi, User";
    console.log(message);
};

showMessage();
console.log(message);

// ------------------------------------- hoisting переменных ----------------------
console.log(z = 0);

let x = 23;
const y = 24;
var z = 25;

console.log(x ,y, z);
