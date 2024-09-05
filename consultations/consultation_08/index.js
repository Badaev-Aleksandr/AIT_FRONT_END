let viewEpisodeButton = document.querySelector("#view-episode-button");
console.log(viewEpisodeButton);

let episodePicture = document.querySelector(".episode-picture-container > img");
console.log(episodePicture);

let episodeCard = document.querySelector(".episode-card");


let changePicture = () => {
    
  episodePicture.setAttribute("src", "./images/Image20240904195059.png");
  // Метод 5 как изменить сразу несколько стилей при помощи свойства .className
  // в css необходимо создать еще один клас и добавить в него новые стили
  episodeCard.className = 'episode-card episode-card_mod';
};

viewEpisodeButton.addEventListener("click", changePicture);
