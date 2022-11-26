async function callApi() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);


 // Rick Sanchez
    const title = document.querySelector("#ricksanchez");
    title.innerHTML = data.results[0].name;

    const description = document.querySelector("#rickDescription");
    description.innerHTML = data.results[0].origin.name;

    const image = document.querySelector("#imgRick");
    image.src = data.results[0].image;


  // Einstein
   const titleFour = document.querySelector("#einsteinTitle");
   titleFour.innerHTML = data.results[10].name;

   const imageFour = document.querySelector("#einsteinImg");
   imageFour.src = data.results[10].image;

   const descriptionFour = document.querySelector("#einsteinDescription");
   descriptionFour.innerHTML = data.results[10].origin.name;


  // Agency Director
  const titleAgency = document.querySelector("#agencyTitle");
  titleAgency.innerHTML = data.results[8].name;

  const imageAgency = document.querySelector("#agencyImg");
  imageAgency.src = data.results[8].image;

  const descriptionAgency = document.querySelector("#agencyDescription");
  descriptionAgency.innerHTML = data.results[8].location.name;



  // Abadango Cluster Princess
  const titleAbadango = document.querySelector("#abadangoTitle");
  titleAbadango.innerHTML = data.results[5].name;

  const imageAbadango = document.querySelector("#abadangoImg");
  imageAbadango.src = data.results[5].image;

  const descriptionAbadango = document.querySelector("#abadangoDescription");
  descriptionAbadango.innerHTML = data.results[5].status;


}
callApi();