//---------------------Выбор Элементов из DOM----------------
//по id
let cardContainer = document.getElementById("card-container");
// console.log(cardContainer);

//По имени Тега
let listElements = document.getElementsByTagName("li");
// console.log(listElements);

//По имени атрибута класса
let titles = document.getElementsByClassName("title");
// console.log(titles);

//По значению атрибута name
let unList = document.getElementsByName("list");
// console.log(unList);

// Селекторы querySelectorAll --> универсальные селекторы
let containers = document.querySelectorAll("div");
// console.log(containers);

let firstTitle = document.querySelector(".title");
// console.log(firstTitle);

//------------------- Добавление элементов на страницу ---------------------

//Шаг 1 - Создаем элемент
let newListItem = document.createElement("li");

//Шаг 2 - Заполнение контентом
newListItem.textContent = "Surname: Smith";

//Шаг 3 - Выбираем элемент на странице, относительно которого добавим новый элемент
let list = document.querySelector("ul");

//Шаг 4 - добавим новый элемент на страницу
list.before(newListItem); 
list.after(newListItem);
list.prepend(newListItem);
list.append(newListItem);

//-------------------------- Изменение элементов 
//с помощью textContent
let mainTitle = document.querySelector(".main-title");
console.log(mainTitle.textContent);
mainTitle.textContent = "Main Title";
console.log(mainTitle.textContent);

//с помощью innerHTML
let cardTitle = document.querySelector("h3");
console.log(cardTitle.innerHTML);

cardTitle.innerHTML = `
<a href="">Profule link</a>
<span> - user </span>
`;

//Изменение стилей с помощью свойства style 
cardTitle.style.backgroundColor = "bisque";

//удаление элемента - метод remove
let lastElement = document.querySelector("#last-element");
lastElement.remove();
document.querySelector("#last-element").remove();




