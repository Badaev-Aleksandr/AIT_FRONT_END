//Условия в дз 19

const getJokeButton = document.querySelector("#get-joke-button");
const dataContainer = document.querySelector(".data-container");

const getJoke = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      dataContainer.classList.remove("error");
      dataContainer.textContent = `${result.setup} - ${result.punchline}`;
    } else {
      throw Object.assign(new Error("Some error"), { responseError: result });
    }
  } catch (error) {
    dataContainer.classList.add("error");
    //временная обработка, так как нет примера объекта ошибки с сервера
    dataContainer.textContent = `${error.responseError.messange}`;
  }
};

getJokeButton.addEventListener("click", getJoke);
