let form = document.querySelector("#form");
console.log(form);
let resultButton = document.querySelector("#result-button");
console.log(resultButton);
let resultWeight = document.querySelector(".result-weight");
console.log(resultWeight);

let calculationFunction = (event) => {
  event.preventDefault();

  let idealWeight;
  let genderValue = form.gender.value;

  let userHeight = form["user-height"].value;

  if (userHeight < 50 || userHeight > 250) {
    alert("Кажется вы указали неверный рост");
    resultWeight.textContent = "Ваш идеальный вес:";
    return;
  } else if (genderValue === "none") {
    alert("Вы не выбрали пол!");
    resultWeight.textContent = "Ваш идеальный вес:";
    return;
  } else if (genderValue === "male") {
    idealWeight = ((userHeight - 100) * 0.9).toFixed(0);
    resultWeight.textContent = `Ваш идеальный вес: ${idealWeight}кг`;
  } else if (genderValue === "famale") {
    idealWeight = ((userHeight - 100) * 0.85).toFixed(0);
    resultWeight.textContent = `Ваш идеальный вес: ${idealWeight}кг`;
  }
  form.reset();
};

resultButton.addEventListener("click", calculationFunction);
