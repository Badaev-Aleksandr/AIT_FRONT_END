/*
Создать приложение "Сalc ideal weight", которое должно расчитывать 
идеальный вес в зависимости от пола и роста

Приложение включает в себя форму со следующими элементами:

 **Поле "Рост, см":
-label - Рост, см*
placeholder - Введите свой рост
тип поля - number
обязательное поле
Селект "Выберете пол":
label - Выберете пол*
опции - Мужской, Женский
тип поля - select
обязательное поле
Кнопка "Рассчитать":
текст кнопки - Рассчитать
Общие требования:

Все лейблы находятся над полями
В соответствии с требованиями к полям, укажите валидацию с помощью атрибутов
Стилизуйте на своё усмотрения
формула расчета женского веса: рост - (100 + (рост - 100) : 10)
формула расчета мужского веса: рост - (100 + (рост - 100) : 20)
При клике на кнопку "Расчитать", под кнопкой показывается сообщение "Ваш идеальный вес: 'результат'"
*/

//Выбор элементов
let buttonResult = document.querySelector(".result-button");
let resultContainer = document.querySelector(".result");
let form = document.querySelector("#form");

//Создание для расчета идеального веса
let calculateIdealWeight = (event) => {
  //   console.log("Calculate");
  event.preventDefault(); //отменяем поведение по умолчанию для формы
  //(перезагрузка и отправка данных)

  //сохраняем значение роста и пола
  let heigth = form.height.value;
  let gender = form.gender.value;
  // console.log(heigth,gender);

  //преобразование значения из поля height в число
  let personHeight = Number(heigth);

  //расчет значения идеального веса
  let idealWeight;
  if (gender === "female") {
    idealWeight = personHeight - (100 + (personHeight - 100) / 10);
  } else if (gender === "male") {
    idealWeight = personHeight - -(100 + (personHeight - 100) / 20);
  }

  //отображение результата на странице
  resultContainer.textContent = `Ваш идеальный вес ${Math.round(idealWeight)} кг`;
};

//Привязка события submit к форме
form.addEventListener("submit", calculateIdealWeight);
