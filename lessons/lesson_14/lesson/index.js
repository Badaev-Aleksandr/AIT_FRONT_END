//----------------Обработчик событий для кнопок---------------------
//Выбор элементов
let infoCard = document.querySelector(".info-card");
let addButton = document.querySelector(".add-button");
let hideButton = document.querySelector(".hide-button");

//Написание логики для кнопок
let addCardFunction = () => {
    // console.log('Add');
    //Изменение видимости карточки

    //1 вариант - style
    // infoCard.style.display = "flex";
    // infoCard.style.opacity = "1";

     //2 вариант - добавление класса через setAttribute
     infoCard.setAttribute('class',"")
};

let hideCardFunction = () => {
    // console.log('Hide');

    //Изменение видимости карточки
    //1 вариант -style
    // infoCard.style.display = "none";
    // infoCard.style.opacity = "0";

    //2 вариант - удаление класса через removeAttribute
    infoCard.removeAttribute("class",)
};

//привязка обработчиков к кнопке
addButton.addEventListener("click", addCardFunction);
hideButton.addEventListener("click", hideCardFunction);
