async function callApi() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);

// Morty
const titleTwo = document.querySelector("#mortyTitle");
titleTwo.innerHTML = data.results[1].name;

const imageTwo = document.querySelector("#imgMorty");
imageTwo.src = data.results[1].image;

const descriptionTwo = document.querySelector("#mortyDescription");
descriptionTwo.innerHTML = data.results[1].location.name;

// Summer Smith
const summerTitle = document.querySelector("#summerTitle");
summerTitle.innerHTML = data.results[2].name;

const summerDescription = document.querySelector("#summerDescription");
summerDescription.innerHTML = data.results[2].origin.name;

const summerImg = document.querySelector("#summerImg");
summerImg.src = data.results[2].image;


// Amish Cyborg
const amishTitle = document.querySelector("#amishTitle");
amishTitle.innerHTML = data.results[15].name;

const amishImg = document.querySelector("#amishImg");
amishImg.src = data.results[15].image;

const amishDescription = document.querySelector("#amishDescription");
amishDescription.innerHTML = data.results[15].location.name;


// Antenna Morty
const antennaTitle = document.querySelector("#antennaTitle");
antennaTitle.innerHTML = data.results[17].name;

const antennaImg = document.querySelector("#antennaImg");
antennaImg.src = data.results[17].image;

const antennaDescription = document.querySelector("#antennaDescription");
antennaDescription.innerHTML = data.results[17].location.name;


}
callApi();