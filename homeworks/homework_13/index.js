// 1.Добавить новые элементы в начало и в конец списка
let firstListItem = document.createElement("li");
let lastListItem = document.createElement("li");
firstListItem.textContent = "Firs";
lastListItem.textContent = "Last";
let first = document.querySelector("ol");
first.prepend(firstListItem);
let last = document.querySelector("ol");
last.append(lastListItem);

//2. Изменить текст второго элемента списка
let twoElementList = document.querySelector(".list li:nth-child(2)");
twoElementList.textContent = "I am a changed element";

//3. Удалить третий элемент
let deletedElement = document.querySelector(".list li:nth-child(3)");
deletedElement.remove();
deletedElement.textContent = "I'm a removed element";
let deletedListItem = document.querySelector("ol");
deletedListItem.after(deletedElement);

//4. Изменить стили по своему усмотрению для четвертого элемента
let changeStyle = document.querySelector(".list li:nth-child(4)");
changeStyle.style.fontSize = "60px";
changeStyle.style.color = "red";

