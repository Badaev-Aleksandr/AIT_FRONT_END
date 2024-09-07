let buttonResult = document.querySelector("#cread-button");
console.log(buttonResult);
let form = document.querySelector("#form");
console.log(form);
let cardContainer = document.querySelector(".card-container");
console.log(cardContainer);

let resultName = document.querySelector(".result-name");
console.log(resultName);
let resultSurname = document.querySelector(".result-surname");
console.log(resultSurname);
let resultAge = document.querySelector(".result-age");
console.log(resultAge);
let resultJob = document.querySelector(".result-job");
console.log(resultJob);

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
  resultJob.textContent = userJob;

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
  }else{
    hideCardFunction();
  }

  form.reset();
};

buttonResult.addEventListener("click", getDate);
