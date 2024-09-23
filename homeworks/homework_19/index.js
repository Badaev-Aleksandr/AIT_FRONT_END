/*
Разработать мини-приложение для получения случайных шуток

Требования:

Нужно создать кнопку "Get Joke", при клике на которую, будет выполняться GET запрос(используйте fetch). 
В ответе на запрос будет приходить случайная шутка
url: https://official-joke-api.appspot.com/random_joke
После того как вы получите успешный ответ, разместите шутку на странице
Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новая шутка
Стилизуйте на ваше усмотрение
*/

let jokeContent = document.querySelector("#joke-content");
let getJokeButton = document.querySelector("#getJoke");

const getJoke = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
      { method: "GET" }
    );
    console.log(response);

    const jokeData = await response.json();
    console.log(jokeData);
    if(response.ok){
        jokeContent.textContent = `${jokeData.setup} ${jokeData.punchline}`;
    }else{
        throw Object.assign(new Error('Some error'), {responseError: jokeData})
    }
  } catch (error) {
    console.log(error.responseError);
    jokeContent.textContent = `${error.reportError}`;
  }
};

/* setInterval(getJoke, 50); */

getJokeButton.addEventListener("click", getJoke);
