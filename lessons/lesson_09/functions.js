// Function Declaration

function sum (a,b){
    return a + b;
}
//вызов 
let result = sum(50,30);
console.log(result);

/* Объявления функций поднимаются вверх контекста исполнения
(например, блока или функции).
Это означает, что вы можете вызвать функцию до
ее фактического объявления в коде. */

greet(); //вызов функции
function greet(){
    console.log("Hello JS"); //обьявление
}

//Function Expression

const devide = function(a,b){
    return a / b;
}
console.log(devide(10,3));

//Function Expression не поднимается,
// поэтому ее нужно обьявить перед использованием.

/* console.log(subtract(5,5));
const subtract = function(x,y){
    return x-y;
} */
/*  JavaScript бросает ошибку
    ReferenceError: Cannot access 'subtract' before initialization,
    потому что вы пытаетесь вызвать функцию до того, как переменная
    subtract была инициализирована. */

const subtract = function(x,y){
    return x-y;
}
console.log(subtract(5,7));

//Function Declaration всегда имеют имя.
//Function Expression могут быть анонимными или именованными
