console.log("Hello JS"); /* ввод в консоль */

// создание переменных
let dog = "Sharik"; //let можно изменять
dog = "Tusik";
console.log(dog);

const cat = "Barsik"; //const изменять нельзя
console.log(cat);

// Приметивные тиаы данных 
// 1 string

let str1 = "Можно в двойных";
let str2 = 'Можно в одинарных';
let str3 = "13";
let str4 = str1 + " " + str2;
console.log(str4);

console.log(str1.toUpperCase()); 

// 2 Number
let num1 = 3;
let num2 = 9.7;

//3 bigInt
// bigint — низкий поклон в сторону крипро- валют, токенов, контрактов.
// Они оперируют большими числами, и там этот тип данных очень пригождается.
// Скорее всего, не пригодится в вашем обычном фронтенде.
let num3 = 1239n;

//4 Boolean
let isDrunk = false;

//условная конструкция

if (isDrunk){
    console.log("Ты пьян");
}
console.log(isDrunk ? "Ты пьян" : "Молодец")

// 5 undefined
let str5;
str5 = 12;
console.log(str5);

//6 null
// null -отсутствие значения 
let empty = null;
console.log(empty);

//7 symbol
let s1 = Symbol("что-то");


//Преобразование типов 
//1 Преобразование в строку

// неявное преобразование 

let str7 = ''+9  // "9"
console.log(typeof str7);

//явное преобразование
const num4 = 10;
let str8 = String(num4);
console.log(typeof str8);

//пример
const res = 9 + 12 + "5"; //"215"
console.log(typeof res);
console.log(res);

const res2 = "5" + 9 + 12; //"5912"
console.log(res2);

//Приображение в число неявное 

const num5 = + "6";
console.log(typeof num5);

const res3 = +"9" + +"10";
console.log(res3);

//Явное преобразование в число

const num6 = Number("117"); //117
const num7 = Number("129*#"); //Nan - not a number появляется при неудачном 
//преобразовании или неудачной мат операции
console.log(typeof num7);

//Преобразование в булевое значение
//число в булевое 

const res4 = Boolean(9); //True
const res5 = Boolean(0); //False
const test5 = Boolean(-1); //True

//Строка в булевое 
const res6 = Boolean(""); // False
const res7 = Boolean(" "); // True
const res8 = Boolean(null); // False
const res9 = Boolean(undefined); // False

// Равенство строгое и нестрогое
// === строгое равенство
// == нестрогое равенство
// = присвоение

console.log(9 === "9"); //False
console.log(9 == "9"); // True -- число преобразуется в стринг

console.log(('b' +'a' + + 'a' + 'a').toLowerCase());

let age = 18;
if(age < 18){
    console.log("Вы несовершеннолетний");
}else if(age >= 18 && age< 65){
    console.log("Вы взрослый человек");
}else{
    console.log("Вы пенсионер");
}

let day = 3;
let dayName;
switch(day){
    case 1:
        dayName = "Понедельник";
        break;
    case 3: 
        dayName = "Среда";
        break;
    default:
        dayName = "Некорректный номер дня";
}
console.log(dayName);

//Использование шаблонных строк

const firstName = "Aleksandr";
const lastName = "Badaev";
const age1 = 30;
const city = "London";

//Использование шаблонных строк

const greeting = `Привет, меня зовут ${firstName + " " + lastName}. Мне ${age1} лет, я живу в городе ${city}.`;
console.log(greeting);

//Массив - динамический массив
// Длина не фиксирована 

// Два способа создания
const arr1 = []; //1 способ
const arr2 = new Array(); // 2 способ

//Как добавить значение по индексу 
const fruits = [];
fruits[0] = "Banana"; // добавление в индекс 0 "Banana"
fruits[1] = "Apple";
console.log(fruits);

//Как получить значения по индексу 
console.log(fruits[0]);
console.log("Количесвто значений в массиве: " + fruits.length);

//Как создать массив сразу со значением 

const cars = ["Lada","Mercedes","Opel","Audi","VW","Tesla"];

//Методы работы с массивами

const students = [];
students.push("John"); // "push" добавяет элемент справа 
console.log(students);
students.push("Tom"); // "push" добавяет элемент справа 
console.log(students);
students.unshift("Alex"); // "unshift" добавяет элемент слева 
console.log(students);

//pop - удалит элемент с конца массива 
const vik = students.pop();
console.log(students);
console.log(vik);

//shift - удаляет элемент слева массива (начала)
const stud = students.shift();
console.log(students);
console.log(stud);