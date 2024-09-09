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
  let check = true;

  event.preventDefault();

  let userNameValue = form.userName.value;
  resultName.textContent = userNameValue;
  let userSurnameValue = form.userSurname.value;
  resultSurname.textContent = userSurnameValue;
  let userAgeValue = form.userAge.value;
  resultAge.textContent = userAgeValue;
  let userJob = form.userJob.value;
  if (userJob.length === 0) {
    resultJob.textContent = "Профессия не указана!";
  } else {
    resultJob.textContent = userJob;
  }

  if (userNameValue.length === 0) {
    alert("Вы не ввели Имя!");
    check = false;
  }
  if (userSurnameValue.length === 0) {
    alert("Вы не ввели Фамилию!");
    check = false;
  }
  if (userAgeValue.length === 0) {
    alert("Вы не ввели возраст!");
    check = false;
  }
  if (check) {
    addCardFunction();
  } else {
    hideCardFunction();
  }

  form.reset();
};

buttonResult.addEventListener("click", getDate);
