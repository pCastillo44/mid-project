async function callApi() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);

// Ants in my Eyes Johnson
const titleThree = document.querySelector("#antsTitle");
titleThree.innerHTML = data.results[19].name;

const imageThree = document.querySelector("#imgAnts");
imageThree.src = data.results[19].image;

const descriptionThree = document.querySelector("#antsDescription");
descriptionThree.innerHTML = data.results[19].location.name;

// Abradolf Lincler
const abradolfTitle = document.querySelector("#abradolfTitle");
abradolfTitle.innerHTML = data.results[6].name;

const summerDescription = document.querySelector("#abradolfDescription");
summerDescription.innerHTML = data.results[6].origin.name;

const abradolfImg = document.querySelector("#abradolfImg");
abradolfImg.src = data.results[6].image;


// Annie
const annieTitle = document.querySelector("#annieTitle");
annieTitle.innerHTML = data.results[16].name;

const annieImg = document.querySelector("#annieImg");
annieImg.src = data.results[16].image;

const annieDescription = document.querySelector("#annieDescription");
annieDescription.innerHTML = data.results[16].location.name;


// Alien Googah
const alienTitle = document.querySelector("#alienTitle");
alienTitle.innerHTML = data.results[12].name;

const alienImg = document.querySelector("#alienImg");
alienImg.src = data.results[12].image;

const alienDescription = document.querySelector("#alienDescription");
alienDescription.innerHTML = data.results[12].location.name;


}
callApi();


// ACTUAL DATE

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("actualDate").innerHTML = day + "/" + month + "/" + year;