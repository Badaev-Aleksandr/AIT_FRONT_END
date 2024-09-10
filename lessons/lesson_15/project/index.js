let buttonResult = document.querySelector("#cread-button");
let form = document.querySelector("#form");
let cardContainer = document.querySelector(".card-container");
let resultName = document.querySelector(".result-name");
let resultSurname = document.querySelector(".result-surname");
let resultAge = document.querySelector(".result-age");
let resultJob = document.querySelector(".result-job");

let addCardFunction = () => {
  cardContainer.classList.add("visible");
};

let hideCardFunction = () => {
  cardContainer.classList.remove("visible");
};

let getDate = (event) => {
  event.preventDefault();

  let check = true;

  let userNameValue = form.userName.value.trim();
  resultName.textContent = userNameValue;
  let userSurnameValue = form.userSurname.value.trim();
  resultSurname.textContent = userSurnameValue;
  let userAgeValue = Number(form.userAge.value.trim());
  resultAge.textContent = userAgeValue;
  let userJob = form.userJob.value.trim();

  if (userNameValue.length === 0) {
    alert("Вы не ввели Имя!");
    check = false;
    hideCardFunction();
    return;
  }
  if (userSurnameValue.length === 0) {
    alert("Вы не ввели Фамилию!");
    check = false;
    hideCardFunction();
    return;
  }
  if (userAgeValue.length === 0) {
    alert("Вы не ввели возраст!");
    check = false;
    hideCardFunction();
    return;
  } else if (userAgeValue < 18 || userAgeValue > 80) {
    alert(
      "Упс кажется вы ошиблись в возрасте! " +
        "Сотрудники только от 18 до 80 лет"
    );
    return;
  }

  if (userJob.length === 0) {
    resultJob.textContent = "Должность не указана!";
  } else {
    resultJob.textContent = userJob;
  }

  if (check) {
    addCardFunction();
  } else {
    hideCardFunction();
  }

  form.reset();
};

form.addEventListener("submit", getDate);
