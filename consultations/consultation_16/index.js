const dataContainer = document.querySelector(".data-container");
const getDataButton = document.querySelector("#get-data");


const getUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const userData = await response.json();
    console.log(userData);

    if (response.ok) {
      // const userFullName = `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last} `;
      // const userEmail = userData.results[0].email;
      // const userPiPictureUrl = userData.results[0].picture.medium;

      const person = {
        fullName: `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last} `,
        userData: userData.results[0].email,
        userPiPictureUrl: userData.results[0].picture.medium,
      };

      // const imgBlock = document.createElement("img");
      // imgBlock.setAttribute('src', userPiPictureUrl);
      // dataContainer.append(imgBlock);

      // const nameBlock = document.createElement("div");
      // nameBlock.textContent = userFullName;
      // dataContainer.append(nameBlock);

      // const emailBlock = document.createAttribute("div");
      // emailBlock.textContent = userEmail;
      // dataContainer.append(userEmail);

//       dataContainer.innerHTML = `
// <img src = ${person.userPiPictureUrl}>  
// <div>${person.fullName}</div>
// <div>${person.userEmail}</div>
// `;

      // console.log(userPiPictureUrl);
      // console.log(userEmail);
      // console.log(userFullName);

      //обработака ошибок 400-500  <--------------------------
    } else {
      throw Object.assign(new Error("status 400 or 500"));
    }
  } catch (error) {
    console.log(error);
  }
};

getDataButton.addEventListener("click", getUserData);
