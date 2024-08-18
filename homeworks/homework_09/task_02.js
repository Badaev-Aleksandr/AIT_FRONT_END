let massiv = [1,2,3,4,5,6,7,8,9,10];
console.log(massiv);
console.log("Длина массива " + massiv.length);
let deletedMassiv = massiv.shift();

console.log("Был вырезан первый элемент массива " + massiv);
console.log("Длина массива " + massiv.length);
massiv.push(deletedMassiv);
console.log("Вырезанный элемент массива был вставлен в конец массива " + massiv);
console.log("Длина массива " + massiv.length);