const dataContainer = document.querySelector(".data-container");
const getDataButton = document.querySelector("#get-data");

const getUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/1");
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

      dataContainer.innerHTML = `
<img src = ${person.userPiPictureUrl}>  
<div>${person.fullName}</div>
<div>${person.userEmail}</div>
`;

      // console.log(userPiPictureUrl);
      // console.log(userEmail);
      // console.log(userFullName);

      //обработака ошибок 400-500  <--------------------------
    } else {
        throw Object.assign(new Error('status 400 or 500'));
    }
  } catch (error){
    console.log(error);
    
  }
};

getDataButton.addEventListener("click", getUserData);

/*
{results: Array(1), info: {…}}
info
: 
{seed: '14df95ff3c97b741', results: 1, page: 1, version: '1.4'}
results
: 
Array(1)
0
: 
cell
: 
"32078483"
dob
: 
{date: '1994-03-12T11:25:13.784Z', age: 30}
email
: 
"malou.andersen@example.com"
gender
: 
"female"
id
: 
{name: 'CPR', value: '120394-0630'}
location
: 
{street: {…}, city: 'Allinge', state: 'Midtjylland', country: 'Denmark', postcode: 34042, …}
login
: 
{uuid: '90932e05-4cba-401e-a894-e5d1abf76ecf', username: 'crazytiger410', password: 'martinez', salt: 'VUNah3lF', md5: '48223dcf42711d678510f3db497351ac', …}
name
: 
{title: 'Mrs', first: 'Malou', last: 'Andersen'}
nat
: 
"DK"
phone
: 
"69448793"
picture
: 
{large: 'https://randomuser.me/api/portraits/women/63.jpg', medium: 'https://randomuser.me/api/portraits/med/women/63.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/63.jpg'}
registered
: 
{date: '2004-01-01T17:33:58.489Z', age: 20}
[[Prototype]]
: 
Object
length
: 
1
[[Prototype]]
: 
Array(0)
[[Prototype]]
: 
Object
*/
