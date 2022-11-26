// FETCH EN TODOS LOS SCRIPTS
async function callApi() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data.results);


  // EN LA PAGINA DE INICIO SOLAMENTE RICK / MORTY Y ANT
  // Rick Sanchez
  const title = document.querySelector("#ricksanchez");
  title.innerHTML = data.results[0].name;

  const description = document.querySelector("#rickDescription");
  description.innerHTML = data.results[0].origin.name;

  const image = document.querySelector("#imgRick");
  image.src = data.results[0].image;

  // Morty
  const titleTwo = document.querySelector("#mortyTitle");
  titleTwo.innerHTML = data.results[1].name;

  const imageTwo = document.querySelector("#imgMorty");
  imageTwo.src = data.results[1].image;

  const descriptionTwo = document.querySelector("#mortyDescription");
  descriptionTwo.innerHTML = data.results[1].location.name;

  // Ants in my Eyes Johnson
  const titleThree = document.querySelector("#antsTitle");
  titleThree.innerHTML = data.results[19].name;

  const imageThree = document.querySelector("#imgAnts");
  imageThree.src = data.results[19].image;

  const descriptionThree = document.querySelector("#antsDescription");
  descriptionThree.innerHTML = data.results[19].location.name;
  // HASTA AQUI PRIMER INDEX
}
callApi();
