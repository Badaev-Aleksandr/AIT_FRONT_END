let number = [];
let count = 0;

// Заполняем массив случайными числами от 1 до 100
while(count<10){
    let random = Math.random();
number.push(Math.ceil(random * 100));
count++;
}
console.log(number.join(", "));
console.log( "Длинна массива " + number.length);
let min = number[0];
let max = number[0];

// Поиск минимального и максимального значений в массиве
for(let i = 0; i<number.length; i++){

    if(min > number[i]){
        min = number[i];
    }
    if(max < number[i]){
        max = number[i];
    }
}
console.log("Min: " + min);
console.log("Max: " + max);




