//---------------------------------------------------- деструктурирующее присваивание
// let colorsConfig = ["dark", "light"];

// // 1 вариант - без деструктуризации
// // let theme = colorsConfig[0];
// // let secondTheme = colorsConfig[1];
// // console.log(theme, secondTheme);

// // 2 вариант - с деструктуризацией
// let [theme, secondTheme, size = "20px"] = colorsConfig;
// console.log(theme, secondTheme, size);

/*Объявить массив из 5 элементов и заполнить его любыми числами. 
Присвоить 5 переменным значения из массива с помощью деструктуризации.*/

/* let exampleNum = [10, 4, 20, 110, 3];
let [x, y, z, a, b] = exampleNum;

console.log(`x - ${x}`);
console.log(`y - ${y}`);
console.log(`z - ${z}`);
console.log(`a - ${a}`);
console.log(`b - ${b}`); */

// -------------------------------Встроенные методы для взаимодействия с пользователем ---------------------

// *Метод alert  - Ничего не возвращает!
// let message = 'Hello, User';
// let alertResult = alert(message);
// console.log(alertResult); // Вернется "undefined"

// *Метод prompt
// При нажатии на кнопку "ОК" метод prompt вернет значение из поля или пустую строку, если значения нет!
// При нажатии "отмена" вернет "null"!
// let resultPromt = prompt("Введите свой возраст");
// console.log(resultPromt);

// *Метод confirm
// Возвращает "true" если нажимаем "OK"!
// Возвращает "false" если нажимаем "отмена"!
// let resultConfirm = confirm("Вы являетесь админом?");
// console.log(resultConfirm);

//------------------------------------------------- Функции. Основы ------------------------------------------
let messange = "Hello";
function showMessage() {
  let messange = "Hello, User";
  console.log(messange);
}
showMessage();
console.log(messange);

//  ------------------------------------------ Функции с параметрами -----------------------------------
// function newShowMessage(name, age) {
//     if(age === undefined){
//         console.log("Возраст отсутствует");
//     } else {
//         let message = `Hello, ${name}. Age ${age}.`;
//         console.log(message);
//     }
// }
// newShowMessage("Mary", 32);
// newShowMessage("Tom", 25);
// newShowMessage("Anna");
// newShowMessage();

function newShowMessage(name = "John", age = 20) {
        let message = `Hello, ${name}. Age ${age}.`;
        console.log(message);
}
newShowMessage("Mary", 32);
newShowMessage("Tom", 25);
newShowMessage("Anna");
newShowMessage(undefined,24);


// -------------------------- Возврат значения -----------------------
function getFullName(){
    let name = "Bob";
    let surname = "Smidt"
    let userName = `${name} ${surname}`;
    return userName;
}
let fullName = getFullName();
console.log(fullName);
